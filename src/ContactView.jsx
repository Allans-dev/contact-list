import "./contact-view-styles.css";

const ContactView = ({ detail, index }) => {
  console.log(detail);

  return (
    <section className="contact">
      <table>
        <tr>
          <td colSpan={2}>{detail.name}</td>
        </tr>
        <tr>
          <td>Username</td>
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
      </table>
      <section className="btn-container">
        <div className="business">💻</div>
        <div className="address">🏠</div>
      </section>
    </section>
  );
};

export default ContactView;
