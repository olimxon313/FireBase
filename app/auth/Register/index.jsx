import './register.scss';

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Register submitted');
  };

  return (
    <div className="register-container">
      <h2 className="register-title">Register</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <input type="text" placeholder="Username" required className="register-input" />
        <input type="email" placeholder="Email" required className="register-input" />
        <input type="password" placeholder="Password" required className="register-input" />
        <button type="submit" className="register-button">Register</button>
      </form>
    </div>
  );
};

export default Register;
