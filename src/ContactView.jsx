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
              <th colSpan={2} className="name">
                {detail.name}
              </th>
            </tr>
            <tr>
              <td>
                <u>Username:</u>
              </td>
              <td>{detail.username}</td>
            </tr>
            <tr>
              <td colSpan={2}>
                ✉️ <a href={`mailto:${detail.email}`}>{detail.email}</a>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                📞 <a href={`tel:${detail.phone}`}>{detail.phone}</a>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                🌐 <a href={detail.website}>{detail.website}</a>
              </td>
            </tr>
          </tbody>
        )}
        {toggle === BUSINESS && id === detail.id && (
          <tbody>
            <tr>
              <th colSpan={2} className="name">
                {detail.name}
              </th>
            </tr>
            <tr>
              <td>
                <u>Company:</u>
              </td>
              <td>{detail.company.name}</td>
            </tr>
            <tr>
              <td colSpan={2} style={{ textAlign: "center" }}>
                {detail.company.bs}
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <i>"{detail.company.catchPhrase}"</i>
              </td>
            </tr>
          </tbody>
        )}
        {toggle === ADDRESS && id === detail.id && (
          <tbody>
            <tr>
              <th colSpan={2} className="name">
                {detail.name}
              </th>
            </tr>
            <tr>
              <td colSpan={2}>
                <u>Address:</u>
              </td>
            </tr>
            <tr>
              <td>{detail.address.suite}</td>
              <td>{detail.address.street}</td>
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
