const nodemailer = require("nodemailer");
const { UserModel } = require("../model/User.model");
const sendEmail = async (Firstname, email, message) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: "lakshakarashutosh@gmail.com",
        pass: "kyisyoouwrlajazd",
      },
    });

    const mailOptions = {
      from: "lakshakarashutosh@gmail.com",
      to: email,
      subject: "Welcome to Acn Health care - Crafting Future-Ready Workplaces",
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
          <div style="background-color: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #333333; margin-bottom: 20px;">Welcome to Acn Healthcare!</h2>
            <p style="color: #666666; line-height: 1.5;">
              Hi ${Firstname},<br><br>
              Thank you for joining Acn Healthcare! Your form submission has been received, and we're excited to have you onboard.
            </p>
            <p style="color: #666666; line-height: 1.5;">
              We are committed to crafting future-ready workplaces that inspire innovation and productivity, and we can't wait to embark on this journey with you.
            </p>
            <p style="color: #666666; line-height: 1.5;">
              At Acn Healthcare, we believe in creating environments that not only meet today's needs but also anticipate and adapt to the challenges of tomorrow.
            </p>
            <p style="color: #666666; line-height: 1.5;">
              Your decision to join us reflects your commitment to building a better workplace, and we're here to support you every step of the way.
            </p>
            <p style="color: #666666; line-height: 1.5;">
              Should you have any questions or require further assistance, feel free to reach out to us at <a href="mailto:info@Acn.com" style="color: #007bff; text-decoration: none;">info@Acn.com</a>.
            </p>
            <p style="color: #666666; line-height: 1.5;">
              Get ready to revolutionize your workplace experience with Acn Healthcare!
            </p>
            <p style="color: #666666; line-height: 1.5;">
              Best Regards,<br>
              The Acn Healthcare Team
            </p>
          </div>
        </div>
      `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Mail has been sent.", info.response);
      }
    });
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to send email: ${error}`);
  }
};

const RegisterUserinfo = async (req, res) => {
  const {
    Firstname,
    lastname,
    email,
    gender,
    dateOfBirth,
    primaryMobile,
    secondaryMobile,
    qualification,
    fatherName,
    bloodGroup,
    emergencyContact,
    emergencyContactName,
    presentAddress,
    permanentAddress,
    message,
    uan,
    PanName,
    Pannumber,
    PANCard,
    AadharName,
    Adhaarnumber,
    AadharCard,
    MaritalStatus,
    pf,
    esi,
    nomineeName,
    relationshipWithNominee,
    bankAccount,
    bankAccountNumber,
    ifscCode,
    bankName,
    profilepic,
    SalarySlips1,
    SalarySlips2,
    SalarySlips3,
    Graduate,
    PostGraduate,
    certificate10th,
    certificate12th,
    companyName,
    designation,
    doj,
    dol,
    process,
    salary,
    RelievingLetter,
    ExperienceLetter,
    companyName2,
    designation2,
    doj2,
    dol2,
    process2,
    salary2,
    OfferLetter2,
    ExperinaceLetter2,
    schoolName,
    schoolLocation,
    yearOfPassing,
    overallPercentage,
    collegeName,
    collegeLocation,
    collegeYearOfPassing,
    collegeOverallPercentage,
    collegeNameGraduation,
    graduationLocation,
    yearOfPassingGraduation,
    overallPercentageGraduation,
    degreegraduate,
    specializationgraduate,
    collegeNamePostgraduate,
    postgraduateLocation,
    yearOfPassingPostgraduate,
    overallPercentagePostgraduate,
    degreePostgraduate,
    specializationPostgraduate,
    RelievingLetter2,
    PANCard2,
    AadharCard2,
    ExperienceLetter2,
    refername1,
    referdesignation1,
    refercontactno1,
    referemailId1,
    refername2,
    referdesignation2,
    refercontactno2,
    referemailId2,
    Nda,
    hippaAgreement,
    redFlag,
    internetSecurityUsagePolicy,
    internetUsagePolicy,
    declarationForm,
    nomineeForm,
    employeeVerification,
    personalDetails,
    userIdRequest,
    idCardRequest,
    inductionChecklist,
    applicationForm,

    messages,
  } = req.body;

  try {
    let user = await UserModel.findOne({ email });

    if (user) {
      let msgKey = 1;
      while (user.messages.find((msg) => msg.msgKey === `msg${msgKey}`)) {
        msgKey++;
      }
      user.messages.push({ msgKey: `msg${msgKey}`, message });
    } else {
      user = new UserModel({
        Firstname,
        lastname,
        email,
        gender,
        dateOfBirth,
        primaryMobile,
        secondaryMobile,
        qualification,
        fatherName,
        bloodGroup,
        emergencyContact,
        emergencyContactName,
        presentAddress,
        permanentAddress,
        message,
        uan,
        PanName,
        Pannumber,
        PANCard,
        AadharName,
        Adhaarnumber,
        AadharCard,
        MaritalStatus,
        pf,
        esi,
        nomineeName,
        relationshipWithNominee,
        bankAccount,
        bankAccountNumber,
        ifscCode,
        bankName,
        profilepic,
        SalarySlips1,
        SalarySlips2,
        SalarySlips3,
        Graduate,
        PostGraduate,
        certificate10th,
        certificate12th,
        companyName,
        designation,
        doj,
        dol,
        process,
        salary,
        RelievingLetter,
        ExperienceLetter,
        companyName2,
        designation2,
        doj2,
        dol2,
        process2,
        salary2,
        OfferLetter2,
        ExperinaceLetter2,
        schoolName,
        schoolLocation,
        yearOfPassing,
        overallPercentage,
        collegeName,
        collegeLocation,
        collegeYearOfPassing,
        collegeOverallPercentage,
        collegeNameGraduation,
        graduationLocation,
        yearOfPassingGraduation,
        overallPercentageGraduation,
        degreegraduate,
        specializationgraduate,
        collegeNamePostgraduate,
        postgraduateLocation,
        yearOfPassingPostgraduate,
        overallPercentagePostgraduate,
        degreePostgraduate,
        specializationPostgraduate,
        RelievingLetter2,
        PANCard2,
        AadharCard2,
        ExperienceLetter2,
        refername1,
        referdesignation1,
        refercontactno1,
        referemailId1,
        refername2,
        referdesignation2,
        refercontactno2,
        referemailId2,
        Nda,
        hippaAgreement,
        redFlag,
        internetSecurityUsagePolicy,
        internetUsagePolicy,
        declarationForm,
        nomineeForm,
        employeeVerification,
        personalDetails,
        userIdRequest,
        idCardRequest,
        inductionChecklist,
        applicationForm,

        messages: [{ msgKey: "msg1", message }],
      });
    }
    await user.save();
    await sendEmail(Firstname, email, message);
    res
      .status(201)
      .json({
        msg: "Data uploaded and Message sent successfully",
        userinfo: user,
      });
  } catch (err) {
    console.log("Error:", err);
    res
      .status(500)
      .json({ msg: "Something went wrong, please try again later" });
  }
};

const Getuserdata = async (req, res) => {
  try {
    const userdata = await UserModel.find();

    res.status(201).json({ msg: "Get Response", userdata });
  } catch (err) {
    console.log(res);
  }
};

const DeleteUserData = async (req, res) => {
  try {
    const userId = req.params.id;
    const deletedUser = await UserModel.findByIdAndDelete(userId);

    if (!deletedUser) {
      res.status(404).json({ msg: "User not found" });
      return;
    }
    res.status(200).json({ msg: "User deleted successfully", deletedUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Internal server error" });
  }
};

module.exports = { RegisterUserinfo, Getuserdata, DeleteUserData };
