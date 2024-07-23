import "../css/input.css";

const Inputbot = () => {
  return (
    <div className="help" id="help">
      <div className="text">
        <h2>
          Etwas abonnieren
          <span>
            <strong>*</strong>
          </span>
          <br />
          <span>
            <strong>_</strong>
          </span>{" "}
          Unser Newsletter
        </h2>
      </div>
      <div className="innput">
        <p>
          Get weekly update about our product on your email, no spam guaranteed
          we promise ✌️
        </p>
        <form action="">
          <input type="text" />
          <button type="submit">ABONNIEREN</button>
          <i className="fa-solid fa-envelope"></i>
        </form>
      </div>
    </div>
  );
};

export default Inputbot;
