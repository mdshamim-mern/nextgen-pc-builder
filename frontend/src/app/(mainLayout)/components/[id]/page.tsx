export default function ComponentDetailsPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-slate-50 rounded-lg aspect-square flex items-center justify-center">
            <span className="text-slate-400">Image Placeholder for {params.id}</span>
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="mb-2 text-sm font-semibold text-blue-600 tracking-wide uppercase">
              Category
            </div>
            <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mb-4">
              Component Name
            </h1>
            <p className="text-2xl text-slate-900 font-bold mb-6">৳ 0.00</p>
            
            <div className="mb-8 space-y-2">
              <p className="text-slate-600"><span className="font-medium text-slate-800">Brand:</span> Brand Name</p>
              <p className="text-slate-600"><span className="font-medium text-slate-800">Status:</span> In Stock</p>
            </div>
            
            <div className="flex gap-4">
              <button className="flex-1 bg-blue-600 border border-transparent rounded-lg py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                Add to Cart
              </button>
              <button className="flex-1 bg-slate-100 border border-transparent rounded-lg py-3 px-8 flex items-center justify-center text-base font-medium text-slate-900 hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-colors">
                Add to Build
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}