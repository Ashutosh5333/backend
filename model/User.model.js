const { mongoose, Schema } = require("mongoose");
const validator = require("validator");


const MessageSchema = new Schema({
  msgKey: String,
  message: String,
});


const UserSchema = new Schema({
 
  Firstname: {
    type: String,
    required: [true, "please enter your name"],
    maxLength: [50, "name can't exceed 50 characters"],
    minLength: [3, "name should have more than 3 characters"],
  },
  lastname: {
    type: String,
    maxLength: [50, "name can't exceed 50 characters"],
    minLength: [3, "name should have more than 3 characters"],
  },
  email: {
    type: String,
    required: [true, "please enter email"],
    unique: true,
    validate: [validator.isEmail, "please enter a valid email"],
  },
  gender: String,
  dateOfBirth: String,
  primaryMobile: String,
  secondaryMobile: String,
  qualification: String,
  fatherName: String,
  bloodGroup: String,
  emergencyContact: String,
  emergencyContactName: String,
  presentAddress: String,
  permanentAddress: String,
  uan: String,
  
  PanName: String,
  Pannumber: String,
  PANCard: String,

  AadharName: String,
  Adhaarnumber: String,
  AadharCard: String,
  pf: String,
  esi: String,
  nomineeName: String,
  relationshipWithNominee: String,
  bankAccount: String,
  ifscCode: String,
  bankName: String,
  profilepic: String,
  
  certificate10th: String,
  certificate12th: String,
  companyName: String,
  designation: String,
  doj: String,
  dol: String,
  process: String,
  salary: String,
  companyName2: String,
  designation2: String,
  doj2: String,
  dol2: String,
  process2: String,
  salary2: String,
  schoolName: String,
  schoolLocation: String,
  yearOfPassing: String,
  overallPercentage: String,
  collegeName: String,
  collegeLocation: String,
  collegeYearOfPassing: String,
  collegeOverallPercentage: String,
  collegeNameGraduation: String,
  graduationLocation: String,
  yearOfPassingGraduation: String,
  overallPercentageGraduation: String,
  degreegraduate: String,
  specializationgraduate: String,
  collegeNamePostgraduate: String,
  postgraduateLocation: String,
  yearOfPassingPostgraduate: String,
  overallPercentagePostgraduate: String,
  degreePostgraduate: String,
  specializationPostgraduate: String,
  RelievingLetter: String,
  
 
  ExperienceLetter: String,
  messages: [MessageSchema],


  Nda: String,
  hippaAgreement: String,
  redFlag: String,
  internetSecurityUsagePolicy: String,
  internetUsagePolicy: String,
  declarationForm: String,
  nomineeForm: String,
  employeeVerification: String,
  personalDetails: String,
  userIdRequest: String,
  idCardRequest: String,
  inductionChecklist: String,
  applicationForm: String,
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = { UserModel };
