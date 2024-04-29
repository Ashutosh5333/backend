const { TestModel } = require("../model/Test.model");

const TestUserinfo = async (req, res) => {
  try {
    const {
      personalInfo,
      educationDetails,
      Bankdetail,
      companydetails,
      ProffesionalRefernce,
      StatutoryandCompliance,
    } = req.body;

    const {
      Firstname,
      lastname,
      email,
      gender,
      dateOfBirth,
      primaryMobile,
      secondaryMobile,
      bloodGroup,
      fatherName,
      emergencyContactNumber,
      emergencyContactName,
      presentAddress,
      permanentAddress,
      uan,
      pf,
      esi,
      nomineeName,
      relationshipWithNominee,
    } = personalInfo;
  
      
  
    // Check if the email already exists
    const existingUser = await TestModel.findOne({ "personalInfo.email": email });

    if (existingUser) {
      return res.status(400).json({ msg: "email already exists" });
    }

    // Create a new user
    const newUser = new TestModel({
      personalInfo,
      educationDetails,
      Bankdetail,
      companydetails,
      ProffesionalRefernce,
      StatutoryandCompliance,
    });

    await newUser.save();

    res.status(201).json({ msg: "Data uploaded successfully", userinfo: newUser });
  } catch (err) {
    console.log("Error:", err);
    res.status(500).json({ msg: "Something went wrong, please try again later" });
  }
};


const Getuserpostdata = async (req, res) => {
  try {
    const userdata = await TestModel.find();

    res.status(201).json({ msg: "Get Response post", userdata });
  } catch (err) {
    console.log(res);
  }
};


const GetUserById = async (req, res) => {
  try {
    const { id } = req.params; 
    
    const user = await TestModel.findById(id);
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    
    res.status(200).json({ user });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ msg: "Something went wrong, please try again later" });
  }
};



const UpdateUserInfo = async (req, res) => {
  try {
    const { id } = req.params;
    const updateFields = req.body;

    const user = await TestModel.findById(id);

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    Object.assign(user, updateFields);

    await user.save();

    res.status(200).json({ msg: "User data updated successfully", user });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ msg: "Something went wrong, please try again later" });
  }
};


const DeleteTestUserData = async (req, res) => {
  try {
    const userId = req.params.id;
    const deletedUser = await TestModel.findByIdAndDelete(userId);

    if (!deletedUser) {
      res.status(404).json({ msg: "User not found" });
      return;
    }
    res.status(200).json({ msg: "User deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Internal server error" });
  }
};



module.exports = { TestUserinfo ,Getuserpostdata,UpdateUserInfo,GetUserById,DeleteTestUserData };
