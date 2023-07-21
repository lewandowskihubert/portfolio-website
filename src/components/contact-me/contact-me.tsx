import "./contact-me.css"

const ContactMe:React.FC = () => {



    return (
        <div className="contactme-container">
            <div className="contactme-form-content">
                <form id="contact-form">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" />

                    <label htmlFor="email">E-mail:</label>
                    <input type="email" id="email" name="email" />


                    <label htmlFor="subject">Subject:</label>
                    <input type="text"id="subject" name="subject" />

                    <label htmlFor="message">Message:</label>
                    <textarea name="message" id="message" cols={50} rows={10}></textarea>

                    <button type="submit">Send</button>


                </form>
                
            </div>
            </div>
    )

}

export default ContactMe