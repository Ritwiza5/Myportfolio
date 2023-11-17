import "./contact.scss"

const Contact = () => {
  return (
    <div className="contact">
        <div className="textContainer">
          <h1> Looking forward to collaborate</h1> 
          <div className="item">
            <h2>Mail</h2>
            <span>mailritu2002@gmail.com</span>
          </div>
          </div>
        <div className="formContainer">
            <form action="">
                <input type="text" required placeholder="Name" />
                <input type="email" required placeholder="Email" />
                <textarea rows={8} placeholder="Message" />
                <button>Submit</button>
            </form>
        </div>

    </div>
  )
}

export default Contact