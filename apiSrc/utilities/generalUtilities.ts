/**
 * Reads a readable stream and convert it into actual object by parse the json generated
 * @param stream
 * @returns object
 */

export async function streamToString(stream: ReadableStream): Promise<string> {
  const reader = stream.getReader();
  const decoder = new TextDecoder();
  let result = '';
  let done = false;

  while (!done) {
    const { value, done: readDone } = await reader.read();
    done = readDone;
    result += decoder.decode(value, { stream: !done });
  }

  const parsedResult = await JSON.parse(result);
  return parsedResult;
}
