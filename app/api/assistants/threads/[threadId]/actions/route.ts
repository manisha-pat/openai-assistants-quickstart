import { NextRequest, NextResponse } from "next/server";
import { openai } from "@/app/openai";

// Send a new message to a thread
export async function POST(
  request: NextRequest,
  context: { params: Record<string, string> }
) {
  const { params } = context;

  const { toolCallOutputs, runId } = await request.json();

  const stream = openai.beta.threads.runs.submitToolOutputsStream(
    params.threadId, // `params.threadId` comes from the dynamic route
    runId,
    { tool_outputs: toolCallOutputs }
  );

  return new NextResponse(stream.toReadableStream());
}