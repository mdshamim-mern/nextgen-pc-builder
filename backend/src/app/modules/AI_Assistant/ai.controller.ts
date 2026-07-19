import { Request, Response } from 'express';
import { AiService } from './ai.service';
import catchAsync from '../../shared/catchAsync';
import sendResponse from '../../shared/sendResponse';

const getChatResponse = catchAsync(async (req: Request, res: Response) => {
  const { prompt } = req.body;

  const result = await AiService.getChatResponse(prompt);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'AI Assistant generated a response successfully',
    data: result,
  });
});

export const AiController = { 
  getChatResponse 
};