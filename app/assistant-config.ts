export let assistantId = "asst_wzOnPNun4FVlCG26ggo0wbzJ"; // set your assistant ID here

if (assistantId === "") {
  assistantId =process.env.OPENAI_ASSISTANT_ID;
}