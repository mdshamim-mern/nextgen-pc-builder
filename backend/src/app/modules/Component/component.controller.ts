import { Request, Response } from 'express';
import { ComponentService } from './component.service';
import catchAsync from '../../shared/catchAsync';
import sendResponse from '../../shared/sendResponse';

const createComponent = catchAsync(async (req: Request, res: Response) => {
  const result = await ComponentService.createComponent(req.body);
  sendResponse(res, { statusCode: 201, success: true, message: 'Component created', data: result });
});

const getAllComponents = catchAsync(async (req: Request, res: Response) => {
  const result = await ComponentService.getAllComponents(req.query);
  sendResponse(res, { statusCode: 200, success: true, message: 'Components fetched', data: result });
});

export const ComponentController = { createComponent, getAllComponents };