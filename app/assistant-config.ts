export let assistantId = "asst_zvNAIFHITOa61z8gzbb466RU"; // set your assistant ID here

if (assistantId === "") {
  assistantId = process.env.OPENAI_ASSISTANT_ID;
}
