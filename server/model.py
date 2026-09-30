from ollama import AsyncClient, ChatResponse

class Model:
    def __init__(
            self,
            model: str,
            base_system_prompt: str,
            api_key: str | None,
            think: bool | str,
            host: str = "https://ollama.com",
    ):
        self._model = model
        self._base_system_prompt = base_system_prompt
        self._api_key = api_key
        self._host = host
        self._think = think

        self._client = AsyncClient(
            host=self._host,
            headers = {"Authorization": f"Bearer {self._api_key}"}
        )

    async def send_text(self, text: str, instructions: str):
        response: ChatResponse = await self._client.chat(
            messages=[
                {"role": "system", "content": f"{self._base_system_prompt}\n{instructions}"},
                {"role": "user", "content": text}
            ],
            model=self._model,
            think=self._think
        )

        return response.message.content
