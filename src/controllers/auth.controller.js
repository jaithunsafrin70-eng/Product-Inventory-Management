import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  try {

    const { name, email, password } = req.body;

    res.status(201).json({
      message: "User registered successfully",
      user: {
        name,
        email
      }
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {

    const { email } = req.body;

    const token = jwt.sign(
      { email: email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      message: "Login successful",
      token: token
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};