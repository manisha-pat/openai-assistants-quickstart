import { openai } from "@/app/openai";

import { NextResponse } from 'next/server';

export async function POST(
  request: Request,
  { params }: { params: { threadId: string } }
) {
  try {
    // Extract threadId from params
    const { threadId } = params;

    // Parse the body of the request
    const body = await request.json();

    // Your logic here
    console.log('Thread ID:', threadId);
    console.log('Request Body:', body);

    return NextResponse.json({ success: true, threadId, body });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}