from fastapi import FastAPI, UploadFile, File, HTTPException, Form
from pydantic import BaseModel, Field
from typing import List, Optional
from fastapi.middleware.cors import CORSMiddleware
import generateImage
import os

app = FastAPI()

# CORS Middleware setup
origins = ["http://localhost:3000", "http://127.0.0.1:3000"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class UserData(BaseModel):
    size: List[str]
    tagging: List[str]
    colour: str
    heading: str
    content: str
    time: str
    date: str
    venue: str
    customTags: Optional[List[str]] = []

@app.post('/generate_image')
async def generate_image(
    size: List[str] = Form(...),
    tagging: List[str] = Form(...),
    colour: str = Form(...),
    heading: str = Form(...),
    content: str = Form(...),
    time: str = Form(...),
    date: str = Form(...),
    venue: str = Form(...),
    customTags: Optional[List[str]] = Form(None),
    image: UploadFile = File(...)
):
    data = UserData(
        size=size,
        tagging=tagging,
        colour=colour,
        heading=heading,
        content=content,
        time=time,
        date=date,
        venue=venue,
        customTags=customTags or [],
      
    )
    print(data)
    file_location = f"uploaded_images/{image.filename}"
    os.makedirs(os.path.dirname(file_location), exist_ok=True)
    with open(file_location, "wb+") as file_object:
        file_object.write(image.file.read())
    # Call your image processing or handling function
    generated_image = generateImage.get_image_from_model(data)
    print({'data': f"Data received with heading {data.heading}, image saved as {image.filename}"})
    return {'data': f"Data received with heading {data.heading}, image saved as {image.filename}"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="127.0.0.1", port=9000, reload=True)
