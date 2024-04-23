import React,{ useState, useEffect  } from "react";
import { Container,Row, Col,Form, Button, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header3 from '../components/Header3';
import Footer from '../components/Footer'
import {auth} from '../firebase';
import "./input.css";

// Add a context to store user information globally
const UserContext = React.createContext();

const Input = () => {
    const [heading, setHeading] = useState('');
    const [content, setContent] = useState('');
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');
    const [venue, setVenue] = useState('');
    const [size, setSize] = useState([]);
    const [tagging, setTagging] = useState([]);
    const [customTags, setCustomTags] = useState([]); // New state for custom tags
    const [colour, setColour] = useState('#ffffff');
    const [user, setUser] = useState(null);
    const [showCustomTagInput, setShowCustomTagInput] = useState(false); // State to toggle input visibility
    const [newTag, setNewTag] = useState(''); // State to store new tag value

  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is signed in
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
        // Redirect to the sign-in page if the user is not signed in
        navigate("/signin");
      }
    });

    // Cleanup the subscription on component unmount
    return () => unsubscribe();
    }, [navigate]);
    const handleSizeChange = (val) => setSize(val);
    const handleTaggingChange = (val) => setTagging(val);
    const handleCustomTagChange = (e) => setNewTag(e.target.value);

  const addCustomTag = () => {
    if (newTag && !tagging.includes(newTag)) {
        setTagging(prev => [...prev, newTag]); // Add new tag to tagging array
        setCustomTags(prev => [...prev, newTag]); // Add new tag to custom tags array
        setNewTag(''); // Reset new tag value
        setShowCustomTagInput(false); // Hide input field after adding
    }
  };

     // Function to handle form submission
    const handleSubmit = async () => {
    if (!user || !user.uid) {
        console.error("User not authenticated");
        return;
    }
    
    const formData = new FormData();
    formData.append("size", JSON.stringify(size));
    formData.append("tagging", JSON.stringify(tagging));
    formData.append("colour", colour);
    formData.append("heading", heading);
    formData.append("content", content);
    formData.append("time", time);
    formData.append("date", date);
    formData.append("venue", venue);
    formData.append("image", document.getElementById('formFile').files[0]);

    for (var pair of formData.entries()) {
        console.log(pair[0]+ ', ' + pair[1]);
    }

  
    try {
        const response = await fetch('http://127.0.0.1:9000/generate_image', {
            method: 'POST',
            body: formData,  // Use formData here
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        navigate("/Output");
    } catch (error) {
        console.error("Error saving data:", error);
    }
};


    return (
        <UserContext.Provider value={user}>
        <div>

            <Header3></Header3>

            <>
                <Container fluid className="background">
                    <Row>
                        <h4 className="text-white">Select Design Size</h4>
                    </Row>
                    <Row>
                        <Col>
                            <ToggleButtonGroup
                                type="checkbox"
                                value={size}
                                onChange={handleSizeChange}
                            >
                                <ToggleButton
                                    className="toggle-btn rounded"
                                    id="tbg-btn-1"
                                    value="square"
                                >
                                    Square
                                </ToggleButton>
                                <ToggleButton
                                    className="toggle-btn rounded-1"
                                    id="tbg-btn-2"
                                    value="portrait"
                                >
                                    Portrait
                                </ToggleButton>
                                <ToggleButton
                                    className="toggle-btn rounded"
                                    id="tbg-btn-3"
                                    value="landscape"
                                >
                                    Landscape
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </Col>
                    </Row>
                    <Row>
                        <h4 className="text-white">Add Tagings</h4>
                    </Row>
                    <Row>
                        <Col>
                            <ToggleButtonGroup
                                type="checkbox"
                                value={tagging}
                                onChange={handleTaggingChange}
                            >
                                <ToggleButton
                                    className="toggle-btn rounded"
                                    id="tbg-btn-4"
                                    value="Beautiful"
                                >
                                    Beautiful
                                </ToggleButton>
                                <ToggleButton
                                    className="toggle-btn rounded"
                                    id="tbg-btn-5"
                                    value="Industrial"
                                >
                                    Industrial
                                </ToggleButton>
                                <ToggleButton
                                    className="toggle-btn rounded"
                                    id="tbg-btn-6"
                                    value="Creative"
                                >
                                    Creative
                                </ToggleButton>
                                <ToggleButton
                                    className="toggle-btn rounded"
                                    id="tbg-btn-7"
                                    value="Artwork"
                                >
                                    Artwork
                                </ToggleButton>
                                <ToggleButton
                                    className="toggle-btn rounded"
                                    id="tbg-btn-8"
                                    value="Colourful"
                                >
                                    Colourful
                                </ToggleButton>
                                <ToggleButton
                                    className="toggle-btn rounded"
                                    id="tbg-btn-9"
                                    value="Modern"
                                >
                                    Modern
                                </ToggleButton>
                                <ToggleButton
                                    className="toggle-btn rounded"
                                    id="tbg-btn-10"
                                    value="Festive"
                                >
                                    Festival
                                </ToggleButton>
                                <ToggleButton
                                    className="toggle-btn rounded"
                                    id="tbg-btn-11"
                                    value="Professional"
                                >
                                    Professional
                                </ToggleButton>
                                <ToggleButton
                                    className="toggle-btn rounded"
                                    id="tbg-btn-12"
                                    value="Romantic"
                                >
                                    Romantic
                                </ToggleButton>
                                <ToggleButton
                                    className="toggle-btn rounded"
                                    id="tbg-btn-13"
                                    value="Holiday"
                                >
                                    Holiday
                                </ToggleButton>
                                <ToggleButton
                                    className="toggle-btn rounded"
                                    id="tbg-btn-14"
                                    value="Seasonal"
                                >
                                    Seasonal
                                </ToggleButton>
                                <ToggleButton
                                    className="toggle-btn rounded"
                                    id="tbg-btn-15"
                                    value="Nature"
                                >
                                    Nature
                                </ToggleButton>
                                <ToggleButton
                                    className="toggle-btn rounded"
                                    id="tbg-btn-16"
                                    value="Music"
                                >
                                    Music
                                </ToggleButton>
                                <ToggleButton
                                    className="toggle-btn rounded"
                                    id="tbg-btn-17"
                                    value="Casual"
                                >
                                    Casual
                                </ToggleButton>
                                </ToggleButtonGroup>
                        </Col>
                    </Row> 

                    <Row>
                        <Col>
                                <ToggleButtonGroup
                                    type="checkbox"
                                    value={tagging}
                                    onChange={handleTaggingChange}
                                >
                            
                                <ToggleButton
                                    className="toggle-btn rounded"
                                    id="tbg-btn-18"
                                    value="Fashion"
                                >
                                    Fashion
                                </ToggleButton>
                                <ToggleButton
                                    className="toggle-btn rounded"
                                    id="tbg-btn-19"
                                    value="Rustic"
                                >
                                    Rustic
                                </ToggleButton>
                                <ToggleButton
                                    className="toggle-btn rounded"
                                    id="tbg-btn-20"
                                    value="Christmas"
                                >
                                    Christmas
                                </ToggleButton>
                                <ToggleButton
                                    className="toggle-btn rounded"
                                    id="tbg-btn-21"
                                    value="Easter"
                                >
                                    Easter
                                </ToggleButton>
                                <ToggleButton
                                    className="toggle-btn rounded"
                                    id="tbg-btn-22"
                                    value="Sports"
                                >
                                    Sports
                                </ToggleButton>
                                <ToggleButton
                                    className="toggle-btn rounded"
                                    id="tbg-btn-23"
                                    value="Ball"
                                >
                                    Ball
                                </ToggleButton>
                                <ToggleButton
                                    className="toggle-btn rounded"
                                    id="tbg-btn-24"
                                    value="Vesak"
                                >
                                    Vesak
                                </ToggleButton>
                                <ToggleButton
                                    className="toggle-btn rounded"
                                    id="tbg-btn-25"
                                    value="Education"
                                >
                                    Education
                                </ToggleButton>
                                <ToggleButton
                                    className="toggle-btn rounded"
                                    id="tbg-btn-26"
                                    value="Food"
                                >
                                    Food
                                </ToggleButton>
                                <ToggleButton
                                    className="toggle-btn rounded"
                                    id="tbg-btn-27"
                                    value="Christmas tree"
                                >
                                    Christmas tree
                                </ToggleButton>
                                <ToggleButton
                                    className="toggle-btn rounded"
                                    id="tbg-btn-28"
                                    value="Santa Claus"
                                >
                                    Santa Claus
                                </ToggleButton>
                                <ToggleButton
                                    className="toggle-btn rounded"
                                    id="tbg-btn-29"
                                    value="Gifts"
                                >
                                    Gifts
                                </ToggleButton>
                                <ToggleButton
                                    className="toggle-btn rounded"
                                    id="tbg-btn-30"
                                    value="Snow"
                                >
                                    Snow
                                </ToggleButton>
                
                                <ToggleButton
                                    className="toggle-btn rounded"
                                    id="tbg-btn-32"
                                    value="Oil Lamp"
                                >
                                    Oil Lamp
                                </ToggleButton>
                                <ToggleButton
                                    className="toggle-btn rounded"
                                    id="tbg-btn-33"
                                    value="Cafe"
                                >
                                    Cafe
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                                <ToggleButtonGroup
                                    type="checkbox"
                                    value={tagging}
                                    onChange={handleTaggingChange}
                                >
                                <ToggleButton
                                    className="toggle-btn rounded"
                                    id="tbg-btn-34"
                                    value="Mosque"
                                >
                                    Mosque
                                </ToggleButton>
                                <ToggleButton
                                    className="toggle-btn rounded"
                                    id="tbg-btn-35"
                                    value="Temple"
                                >
                                    Temple
                                </ToggleButton>
                                <ToggleButton
                                    className="toggle-btn rounded"
                                    id="tbg-btn-36"
                                    value="Dancers"
                                >
                                    Dancers
                                </ToggleButton>
                                <ToggleButton
                                    className="toggle-btn rounded"
                                    id="tbg-btn-37"
                                    value="Carnival"
                                >
                                    Carnival
                                </ToggleButton>
                                <ToggleButton
                                    className="toggle-btn rounded"
                                    id="tbg-btn-38"
                                    value="New Year "
                                >
                                    New Year 
                                </ToggleButton>
                                <ToggleButton
                                    className="toggle-btn rounded"
                                    id="tbg-btn-39"
                                    value="Anniversary"
                                >
                                    Anniversary
                                </ToggleButton>
                                <ToggleButton
                                    className="toggle-btn rounded"
                                    id="tbg-btn-40"
                                    value="Flags"
                                >
                                    Flags
                                </ToggleButton>
                                <ToggleButton
                                    className="toggle-btn rounded"
                                    id="tbg-btn-41"
                                    value="Workshop"
                                >
                                    Workshop
                                </ToggleButton>
                                <ToggleButton
                                    className="toggle-btn rounded"
                                    id="tbg-btn-42"
                                    value="Book"
                                >
                                     Book
                                </ToggleButton>
                                <ToggleButton
                                    className="toggle-btn rounded"
                                    id="tbg-btn-43"
                                    value="Lanterns"
                                >
                                    Lanterns
                                </ToggleButton>
                                <ToggleButton
                                    className="toggle-btn rounded"
                                    id="tbg-btn-44"
                                    value="Awards"
                                >
                                    Awards
                                </ToggleButton>
                                <ToggleButton
                                    className="toggle-btn rounded"
                                    id="tbg-btn-46"
                                    value="Wedding"
                                >
                                    Wedding
                                </ToggleButton>
                
                                <ToggleButton
                                    className="toggle-btn rounded"
                                    id="tbg-btn-46"
                                    value="Party"
                                >
                                    Party
                                </ToggleButton>
                                <ToggleButton
                                    className="toggle-btn rounded"
                                    id="tbg-btn-47"
                                    value="Funeral"
                                >
                                    Funeral
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <ToggleButtonGroup type="checkbox" value={tagging} onChange={(e) => handleTaggingChange(e.currentTarget.value)}>
                            {customTags.map((tag, index) => (
                            <ToggleButton key={index} className="toggle-btn rounded" value={tag}>
                                {tag}
                            </ToggleButton>
                            ))}
                        </ToggleButtonGroup>
                        <Button className='plus-btn' variant="outline-secondary" onClick={() => setShowCustomTagInput(true)}>+</Button> 
                        {showCustomTagInput && ( 
                            <Form className="form1">
                            <Form.Group className="mb-3" >
                            <Form.Control
                                type="text"
                                placeholder="Enter new tag"
                                value={newTag}
                                onChange={handleCustomTagChange}
                                className="input"
                            />
                            
                            <Button className='btn-primary'onClick={addCustomTag}>Add</Button>
                            
                            </Form.Group>
                            </Form>
                            
                        )}
                        </Col>
                    </Row>
                    <Row>
                        <h4 className="text-white">Select Colour</h4>
                    </Row>
                    <Row>
                        <Col>
                            <input 
                                type="color" 
                                className="form-control form-control-color" 
                                id="colorPicker" 
                                value={colour} 
                                title="Choose your color"
                                onChange={(e) => setColour(e.target.value)}
                            />
                        </Col>
                    </Row>
                       
                
                    <hr className="horizontal-line" />
                    <Row>
                        <Form className="form1">
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className="text-white">
                                    Add Heading (LESS THAN 8 WORDS)
                                </Form.Label>
                                <Form.Control
                                    className="input"
                                    type="text"
                                    placeholder="Add your heading here"
                                    value={heading}
                                    onChange={(e) => setHeading(e.target.value)}
                                />
                            </Form.Group>
                        </Form>
                    </Row>
                    <Row>
                        <Form className="form1">
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className="text-white">
                                    Add Content (LESS THAN 15 WORDS)
                                </Form.Label>
                                <Form.Control
                                    className="input"
                                    type="text"
                                    placeholder="Add your title here"
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                />
                            </Form.Group>
                        </Form>
                        <Button className="plus-btn" variant="outline-secondary">
                            +
                        </Button>
                        <Form className="form1">
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className="text-white">
                                    Add Content (LESS THAN 15 WORDS)
                                </Form.Label>
                                <Form.Control
                                    className="input"
                                    type="email"
                                    placeholder="Add your content here"
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                />
                            </Form.Group>
                        </Form>
                    </Row>
                    <hr className="horizontal-line" />
                    <Form className="form1">
                        <Row>
                            <Col>
                                <Form.Label className="text-white ">Add Time (3.30 PM)</Form.Label>
                                <Form.Control 
                                className="input" 
                                placeholder="Add Time" 
                                value={time}
                                onChange={(e) => setTime(e.target.value)}/>
                            </Col>
                            <Col>
                                <Form.Label className="text-white ">
                                    Add Date (2024/07/04)
                                </Form.Label>
                                <Form.Control 
                                 className="input"
                                 placeholder="Add Date"
                                 value={date}
                                 onChange={(e) => setDate(e.target.value)}
                                  />
                            </Col>
                            <Col>
                                <Form.Label className="text-white ">
                                    Add Venue (Taj Samudra, Galle face)
                                </Form.Label>
                                <Form.Control 
                                className="input"
                                placeholder="Add Venue"
                                value={venue}
                                onChange={(e) => setVenue(e.target.value)}
                                 />
                            </Col>
                        </Row>
                    </Form>
                    <hr className="horizontal-line" />
                    <Row>
                        <Form className="form1">
                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label className="text-white ">Upload Logo (Png)</Form.Label>
                                <Form.Control className="input1" type="file" />
                            </Form.Group>
                        </Form>
                        <Button className="plus-btn" variant="outline-secondary">
                            +
                        </Button>
                    </Row>
                    <hr className="horizontal-line" />
                    <Button onClick={handleSubmit} className="select-layout" variant="outline-secondary">
                        Generate
                    </Button>
                </Container>

            </>

            <Footer></Footer>

        </div>
        </UserContext.Provider>


    )
}

export default Input