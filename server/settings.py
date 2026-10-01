from dotenv import load_dotenv
import os

load_dotenv()

class Settings:
    def __init__(self):

        model = os.environ.get("MODEL") if os.environ.get("MODEL") else ""
        api_key = os.environ.get("API_KEY") if os.environ.get("API_KEY") else ""
        host = os.environ.get("HOST") if os.environ.get("API_KEY") else ""

        think_env = str(os.environ.get("THINK")) if os.environ.get("THINK") else ""
        think: str | bool  = think_env if think_env else ""

        if think_env in ["true", "false"]:
            think = bool(think_env)
        elif think_env in ["low", "medium", "high"]:
            think = think_env

        if not (model and api_key and think and host):
            print("Some environment variables are missing or are not valid. Using fallback values instead.")

        if not api_key:
            print("Using cloud model provider, please provide an api key.")

        self.model: str = model if model else "gpt-oss:20b-cloud"
        self.api_key: str | None = api_key if api_key else None
        self.think: str | bool = think if think else "low"
        self.host: str = host if host else "https://ollama.com"
