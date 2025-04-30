import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title for the project'],
    maxlength: [100, 'Title cannot be more than 100 characters'],
  },
  description: {
    type: String,
    required: [true, 'Please provide a description for the project'],
    maxlength: [500, 'Description cannot be more than 500 characters'],
  },
  image: {
    type: String,
    required: [true, 'Please provide an image URL for the project'],
  },
  link: {
    type: String,
    required: [true, 'Please provide a link for the project'],
  },
  tags: {
    type: [String],
    required: [true, 'Please provide at least one tag for the project'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Export the model
export default mongoose.models.Project || mongoose.model('Project', ProjectSchema); 