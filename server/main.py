from pathlib import Path
from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Literal
from settings import Settings
from model import Model

app = FastAPI()

origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

settings = Settings()

BASE_SYSTEM_PROMPT = Path("SYSTEM_PROMPT.md").read_text(encoding="utf-8")

model = Model(
    model=settings.model,
    base_system_prompt=BASE_SYSTEM_PROMPT,
    api_key=settings.api_key,
    think=settings.think,
    host=settings.host
)

class Request(BaseModel):
    enhance: bool
    tone: Literal["default", "casual", "professional", "academic"]
    text: str

def get_model() -> Model:
    return model

@app.post("/fix/")
async def root(request: Request, llm_model: Model = Depends(get_model)):
    instructions = """
    - Don't change the text apart from fixing the grammatical errors.
    - Don't change the tone of the text.
    """

    model_response = await llm_model.send_text(text=request.text, instructions=instructions)

    return {"text": model_response}
