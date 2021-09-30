import "./labelWitForgetPassword.css";
const LabelWithForgetPassword = ({ label, require, showForget }) => {
  return (
    <div className="forgot-password-label mt-24">
      <span className="label-text">{label} <span className="require">{require && '*'}</span></span>
      {showForget && (
        <span className="forgot-password-text">Forget Password?</span>
      )}
    </div>
  );
};

export default LabelWithForgetPassword;
