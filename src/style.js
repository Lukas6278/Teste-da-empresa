export const globalStyle = `
  /* ===== RESET E BASE ===== */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
    background: linear-gradient(135deg, #e0f7fa, #ffffff);
    padding: 40px;
    color: #2c3e50;
    text-align: center;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  h1, h2 {
    color: #00796b;
    font-weight: 700;
    margin-bottom: 20px;
    letter-spacing: 0.5px;
  }

  p {
    font-size: 16px;
    margin: 15px 0;
    line-height: 1.6;
    color: #555;
  }

  a {
    display: inline-block;
    text-decoration: none;
    color: #fff;
    background: #00796b;
    padding: 12px 28px;
    border-radius: 10px;
    transition: all 0.3s ease;
    font-weight: 600;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }

  a:hover {
    background: #004d40;
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.2);
  }

  /* ===== TABELAS ===== */
  table {
    width: 90%;
    margin: 30px auto;
    border-collapse: collapse;
    border-radius: 12px;
    overflow: hidden;
    background-color: #ffffff;
    box-shadow: 0 8px 24px rgba(0,0,0,0.08);
    font-size: 14px;
  }

  th, td {
    padding: 16px;
    border-bottom: 1px solid #e0e0e0;
    text-align: left;
    transition: background 0.3s ease;
  }

  th {
    background-color: #00796b;
    color: #fff;
    font-weight: 700;
    letter-spacing: 0.5px;
  }

  tr:nth-child(even) {
    background-color: #f1f8f8;
  }

  tr:hover {
    background-color: #c8e6c9;
  }

  /* ===== PRE FORMATADO ===== */
  pre {
    background-color: #fdfdfd;
    padding: 20px;
    border-radius: 12px;
    text-align: left;
    max-width: 90%;
    overflow-x: auto;
    box-shadow: inset 0 2px 4px rgba(0,0,0,0.05);
    font-family: 'Fira Code', monospace;
  }

  /* ===== LOGIN PAGE ===== */
  .login-box {
    background: #ffffff;
    padding: 3rem 2.5rem;
    border-radius: 16px;
    box-shadow: 0 12px 28px rgba(0,0,0,0.12);
    width: 380px;
    text-align: center;
    margin: 8% auto;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .login-box:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
  }

  .login-box h2 {
    margin-bottom: 2rem;
    color: #00796b;
    font-size: 1.8rem;
  }

  .login-box input {
    width: 100%;
    padding: 0.9rem;
    margin: 0.6rem 0;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 15px;
    transition: all 0.3s ease;
  }

  .login-box input:focus {
    outline: none;
    border-color: #00796b;
    box-shadow: 0 0 8px rgba(0,121,107,0.25);
    background-color: #f0f9f9;
  }

  .login-box button {
    background: #00796b;
    color: #fff;
    border: none;
    padding: 0.9rem;
    border-radius: 8px;
    cursor: pointer;
    width: 100%;
    font-weight: 700;
    font-size: 15px;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }

  .login-box button:hover {
    background: #004d40;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.2);
  }

  .error {
    color: #d32f2f;
    margin-bottom: 1rem;
    font-weight: 600;
    background-color: #ffebee;
    padding: 10px 14px;
    border-radius: 8px;
    box-shadow: inset 0 1px 3px rgba(0,0,0,0.05);
  }

  /* ===== RESPONSIVIDADE ===== */
  @media (max-width: 480px) {
    .login-box {
      width: 90%;
      padding: 2rem;
    }

    table {
      width: 100%;
      font-size: 13px;
    }

    h1, h2 {
      font-size: 1.4rem;
    }

    .login-box h2 {
      font-size: 1.6rem;
    }
  }
`;
