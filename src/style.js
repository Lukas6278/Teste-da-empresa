export const globalStyle = `
  body {
    font-family: 'Arial', sans-serif;
    background: linear-gradient(to bottom, #e0f7fa, #ffffff);
    padding: 40px;
    text-align: center;
  }

  h1, h2 {
    color: #00796b;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    margin: 15px 0;
  }

  a {
    display: inline-block;
    text-decoration: none;
    color: white;
    background: #00796b;
    padding: 10px 25px;
    border-radius: 8px;
    transition: 0.3s;
    font-weight: bold;
  }

  a:hover {
    background: #004d40;
    transform: translateY(-2px);
  }

  table {
    width: 90%;
    margin: 20px auto;
    border-collapse: collapse;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    border-radius: 8px;
    overflow: hidden;
  }

  th, td {
    padding: 12px;
    border-bottom: 1px solid #ccc;
    text-align: left;
  }

  th {
    background-color: #00796b;
    color: white;
  }

  tr:nth-child(even) {
    background-color: #f1f8f8;
  }

  tr:hover {
    background-color: #c8e6c9;
  }

  pre {
    background-color: #f4f4f4;
    padding: 15px;
    border-radius: 8px;
    display: inline-block;
    text-align: left;
    max-width: 90%;
    overflow-x: auto;
  }

  /* ===== LOGIN PAGE STYLES ===== */
  .login-box {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    width: 320px;
    text-align: center;
    margin: auto;
    margin-top: 10%;
  }

  .login-box h2 {
    margin-bottom: 1rem;
    color: #00796b;
  }

  .login-box input {
    width: 100%;
    padding: 0.5rem;
    margin: 0.5rem 0;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .login-box button {
    background: #007bff;
    color: white;
    border: none;
    padding: 0.7rem;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
    font-weight: bold;
  }

  .login-box button:hover {
    background: #0056b3;
  }

  .error {
    color: red;
    margin-bottom: 1rem;
  }
`;
