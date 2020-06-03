import Axios from "axios"
async function handleSubmit(event) {
    event.preventDefault()

    //Get input from form input field
    var input_url = document.querySelectorAll('input[name=test-url]')
    
    //Verify that input is a valid url
    if(Client.validURL(JSON.parse(JSON.stringify(input_url[0].value))))
    {
        console.log("::: FORM INPUT VALID :::")
        
        console.log("BUILDING REQUEST");
        const response = await Axios.post('http://localhost:3000/testArticle', { text : input_url[0].value  })
        console.log(response.data.polarity, "dataaaaaaaaaaaaaa from server")
        document.querySelector('section.url-results #polarity').innerHTML = response.data.polarity
        document.querySelector('section.url-results #subjectivity').innerHTML = response.data.subjectivity
        document.querySelector('section.url-results #polarity_confidence').innerHTML = response.data.polarity_confidence
        document.querySelector('section.url-results #subjectivity_confidence').innerHTML = response.data.subjectivity_confidence
        document.querySelector('section.url-results #excerpt').innerHTML = response.data.text
 

    }else{
        // Display error message if URL is not valide
        var error_section = document.querySelector('section.errors');
        var error = document.querySelector('section.errors #error');
        error.innerHTML = "The URL:[" +JSON.stringify(input_url[0].value)+"] is not valide. Please enter a valid url"
        error_section.style.display = "block";
        
    } 
}

export { handleSubmit }
