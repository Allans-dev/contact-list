import { useState } from "react";
import "./contact-view-styles.css";

const ContactView = ({ detail, index }) => {
  console.log(detail);

  const BUSINESS = "business";
  const ADDRESS = "address";
  const START = "start";

  const [id, setId] = useState(1);
  const [toggle, setToggle] = useState(START);

  const handleBusiness = () => {
    setId(() => detail.id);
    setToggle((prev) => (prev === BUSINESS ? START : BUSINESS));
  };
  const handleAddress = () => {
    setId(() => detail.id);
    setToggle((prev) => (prev === ADDRESS ? START : ADDRESS));
  };

  return (
    <section className="contact">
      <table>
        {toggle === START && (
          <tbody>
            <tr>
              <td colSpan={2}>{detail.name}</td>
            </tr>
            <tr>
              <td>Username:</td>
              <td>{detail.username}</td>
            </tr>
            <tr>
              <td colSpan={2}>{detail.email}</td>
            </tr>
            <tr>
              <td colSpan={2}>{detail.phone}</td>
            </tr>
            <tr>
              <td colSpan={2}>{detail.website}</td>
            </tr>
          </tbody>
        )}
        {toggle === BUSINESS && id === detail.id && (
          <tbody>
            <tr>
              <td colSpan={2}>{detail.name}</td>
            </tr>
            <tr>
              <td colSpan={2}>{detail.company.name}</td>
            </tr>
            <tr>
              <td colSpan={2}>{detail.company.bs}</td>
            </tr>
            <tr>
              <td colSpan={2}>{detail.company.catchPhrase}</td>
            </tr>
          </tbody>
        )}
        {toggle === ADDRESS && id === detail.id && (
          <tbody>
            <tr>
              <td colSpan={2}>{detail.name}</td>
            </tr>
            <tr>
              <td colSpan={2}>{detail.address.suite}</td>
            </tr>
            <tr>
              <td colSpan={2}>{detail.address.street}</td>
            </tr>
            <tr>
              <td>{detail.address.city}</td>
              <td>{detail.address.zipcode}</td>
            </tr>
          </tbody>
        )}
      </table>
      <section className="btn-container">
        <div className="business" onClick={handleBusiness}>
          {toggle === START || toggle === ADDRESS ? "💻" : "👤"}
        </div>
        <div className="address" onClick={handleAddress}>
          {toggle === START || toggle === BUSINESS ? "🏠" : "👤"}
        </div>
      </section>
    </section>
  );
};

export default ContactView;
