import { openai } from "@/app/openai";

// Send a new message to a thread
export async function POST(
  request: Request,
  context: { params: { threadId: string } }
) {
  try {
    const { threadId } = context.params; // Extract threadId from params
    const { toolCallOutputs, runId } = await request.json(); // Parse request body

    // Call OpenAI API
    const stream = openai.beta.threads.runs.submitToolOutputsStream(
      threadId,
      runId,
      { tool_outputs: toolCallOutputs }
    );

    // Return the readable stream
    return new Response(stream.toReadableStream(), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in POST handler:", error);
    return new Response(
      JSON.stringify({ error: "Internal Server Error", details: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}