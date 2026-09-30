from dotenv import dotenv_values
import warnings

class Settings:
    def __init__(self):
        env_settings = dotenv_values(".env")

        model = env_settings.get("MODEL")
        api_key = env_settings.get("API_KEY")
        host = env_settings.get("HOST")

        think_env = env_settings.get("THINK")
        think: str | bool | None = None

        if think_env in ["true", "false"]:
            think = bool(think)
        elif think_env in ["low", "medium", "high"]:
            think = think_env
        else:
            think = None

        if not (model and api_key and think and host):
            warnings.warn("Some environment variables are missing or are not valid. Using fallback values instead.")

        if not "localhost" in host and not api_key:
            warnings.warn("Using cloud model provider, please provide an api key.")

        self.model: str = model if model else "gpt-oss:20b-cloud"
        self.api_key: str | None = api_key if api_key else None
        self.think: str | bool = think if think else "low"
        self.host: str = host if host else "https://ollama.com"
