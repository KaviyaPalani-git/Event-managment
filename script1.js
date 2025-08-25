body {
  margin: 0;
  font-family: Arial, sans-serif;
  scroll-behavior: smooth;
}

nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #222;
  padding: 15px;
  z-index: 1000;
}

nav ul {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 30px;
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  transition: 0.3s;
}

nav a:hover {
  color: orange;
}

section {
  min-height: 100vh;
  padding: 80px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

#home { background: linear-gradient(to right, #ff7e5f, #feb47b); color: white; }
#about { background: #f1f1f1; }
#schedule { background: #d1e8e4; }
#speakers { background: #f9f7d9; }
#contact { background: #e8def8; }

.card {
  background: white;
  padding: 20px;
  margin: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: 0.3s;
}

.card:hover {
  transform: scale(1.05);
}

/* Modal */
.modal {
  display: none;
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.7);
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  text-align: center;
}

#closeModal {
  float: right;
  font-size: 20px;
  cursor: pointer;
}
