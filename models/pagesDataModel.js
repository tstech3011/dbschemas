import mongoose from 'mongoose';

const bidOpportunitiesLinkSchema = mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    url: { type: String, required: true, unique: true },
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  },
  { timestamps: true }
);

const mptapnetworkdetails = mongoose.Schema(
  {
    physicalAddress: { type: String, required: true },
    mailingAddress: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    faxNumber: { type: Number, required: true },
    content: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  },
  { timestamps: true }
);

const techresourceheadings = mongoose.Schema({
  techResourceHeading: { type: String, required: true, unique: true },
});

const technicalresourcedetails = mongoose.Schema({
  technicalResourceHeadings: [techresourceheadings],
});

const faqs = mongoose.Schema({
  question: { type: String, required: true },
  response: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  timestamps: true,
});

const clientSuccessStories = mongoose.Schema({
  businessName: { type: String, required: true },
  contractDetails: { type: String, required: true },
  feedback: { type: String, required: true },
  dateofsubmission: { type: Date, required: true },
});

const clientService = mongoose.Schema({
  businessName: { type: String, required: true },
  pointOfContact: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  State: { type: String, required: true },
  zipcode: { type: String, required: true },
  phone: { type: Number, required: true },
  fax: { type: Number, required: true },
  email: { type: String, required: true },

  comments: { type: String, required: true },
});

const pagesDataSchema = mongoose.Schema({
  home: {
    leftImage: { type: String, required: true },
    rightImage: { type: String, required: true },
    aboutSummary: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    timestamps: true,
  },
  about: {
    banner: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    timestamps: true,
  },
  services: {
    banner: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    timestamps: true,
  },
  bidopportunities: {
    banner: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String, required: true },
    theLinks: [bidOpportunitiesLinks],
  },
  eventsCalendar: [],
  mptapnetwork: [mptapnetworkdetails],
  technicalResources: {
    resourceHead: [technicalresourcedetails],
  },
  faq: [faqs],
  successStories: [clientSuccessStories],

  customerService: [clientService],
});

const pagesData = mongoose.model('pagesData', pagesDataSchema);

export default pagesData;
