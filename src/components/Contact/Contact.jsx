import styles from "../Contact/Contact.module.css";

const Contact = () => {
  return (
    <div style={{ marginTop: "150px", marginBottom: "100px" }}>
      <div className={styles.contact}>
        <span className="fw-bold">Email</span>: support@shoppersstop.in
      </div>
      <div className={styles.contact}>
        <span className="fw-bold">Phone</span>: +91 9550984239
      </div>
      <div className={styles.operations}>Hours of Operation</div>
      <div className={styles.content}>
        Our Customer Support team is available to assist you during the
        following hours:
      </div>
      <div className={styles.contact}>
        <span className="fw-bold">Monday-Saturday </span>:09:00AM-06:00PM
      </div>
      <div className={styles.contact}>
        <span className="fw-bold">Sunday </span>:Closed
      </div>
      <div className={styles.content}>
        Thank you for choosing Shopnow! We appreciate your business and are
        committed to providing you with exceptional service. HAPPY SHOPPING...!
      </div>
    </div>
  );
};

export default Contact;
