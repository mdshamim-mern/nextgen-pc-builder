export class QueryBuilder {
  public query: Record<string, unknown>;

  constructor(query: Record<string, unknown>) {
    this.query = query;
  }

  public filter() {
    const queryObj = { ...this.query };
    const excludeFields = ['searchTerm', 'sort', 'limit', 'page', 'fields'];
    
    excludeFields.forEach((el) => delete queryObj[el]);

    let where: any = {};

    if (Object.keys(queryObj).length > 0) {
      where = {
        AND: Object.entries(queryObj).map(([key, value]) => ({
          [key]: {
            equals: value,
          },
        })),
      };
    }

    return where;
  }

  public search(searchableFields: string[]) {
    let where: any = {};

    if (this.query.searchTerm) {
      const orConditions = searchableFields.map((field) => ({
        [field]: {
          contains: this.query.searchTerm as string,
          mode: 'insensitive', 
        },
      }));

      where.OR = orConditions;
    }

    return where;
  }

  public sort() {
    const sort = (this.query.sort as string) || 'createdAt';
    const sortOrder = sort.startsWith('-') ? 'desc' : 'asc';
    const sortBy = sort.replace(/^-/, '');

    return {
      [sortBy]: sortOrder,
    };
  }

  public paginate() {
    const page = Number(this.query.page) || 1;
    const limit = Number(this.query.limit) || 10;
    const skip = (page - 1) * limit;

    return {
      skip,
      take: limit,
    };
  }

  public build(searchableFields: string[] = []) {
    const filterWhere = this.filter();
    const searchWhere = this.search(searchableFields);
    
    const combinedWhere = {
      ...filterWhere,
      ...(searchWhere.OR ? { OR: searchWhere.OR } : {}),
    };

    const orderBy = this.sort();
    const pagination = this.paginate();

    return {
      where: combinedWhere,
      orderBy,
      ...pagination,
    };
  }
}