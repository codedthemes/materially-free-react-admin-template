export const emailSchema = {
  required: 'Email is required',
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: 'Invalid email address'
  }
};

export const passwordSchema = {
  required: 'Password is required',
  minLength: { value: 8, message: 'Password must be at least 8 characters' },
  validate: {
    noSpaces: (value) => (value?.includes(' ') ? 'Password cannot contain spaces' : true),
    hasUpperCase: (value) => (/[A-Z]/.test(value || '') ? true : 'Password must have at least one uppercase letter'),
    hasNumber: (value) => (/[0-9]/.test(value || '') ? true : 'Password must have at least one number'),
    hasSpecialChar: (value) => (/[^A-Za-z0-9]/.test(value || '') ? true : 'Password must have at least one special character')
  }
};

export const firstNameSchema = {
  required: 'First name is required',
  pattern: { value: /^[a-zA-Z\s]+$/, message: 'Invalid first name' },
  validate: {
    trim: (value) => {
      const trimmedValue = value.trim();
      return trimmedValue.length > 0 || 'First name cannot be empty or contain only spaces';
    }
  },
  onBlur: (e) => {
    e.target.value = e.target.value.trim();
  }
};

export const lastNameSchema = {
  required: 'Last name is required',
  pattern: { value: /^[a-zA-Z\s]+$/, message: 'Invalid last name' },
  validate: {
    trim: (value) => {
      const trimmedValue = value.trim();
      return trimmedValue.length > 0 || 'Last name cannot be empty or contain only spaces';
    }
  },
  onBlur: (e) => {
    e.target.value = e.target.value.trim();
  }
};

export const contactSchema = {
  required: 'Contact number is required',
  pattern: { value: /^[0-9().-]{7,15}$/, message: 'Invalid contact number' }
};

export const otpSchema = {
  required: 'OTP is required',
  minLength: { value: 6, message: 'OTP must be exactly 6 characters' }
};

export const radioBoxSchema = {
  required: 'Option selection is required'
};

export const colorSchema = {
  validate: (value) => (value.length > 0 ? true : 'At least one color is required')
};

export const cardSchema = {
  cardName: { required: 'Card name is required' },
  cardNumber: { required: 'Card number is required' }
};

export const roleSchema = {
  role: {
    required: 'Role selection is required',
    maxLength: { value: 50, message: 'Role must be at most 50 characters' },
    pattern: { value: /^[a-z\d\-/#_\s]+$/i, message: 'Only alphanumerics are allowed' }
  },
  skills: {
    required: 'Skill selection is required',
    validate: (value) => {
      if (value.length < 3) return 'Skill tags field must have at least 3 items';
      if (value.length > 15) return 'Please select a maximum of 15 skills.';
      return true;
    }
  }
};

export const addressSchema = {
  country: {
    required: 'Country is required'
  },
  region: {
    required: 'Region required'
  },
  city: {
    required: 'City is required'
  },
  address: {
    required: 'Address is required'
  },
  postCode: {
    required: 'Postcode is required'
  }
};

export const nameSchema = {
  required: 'Name is required',
  pattern: { value: /^[a-zA-Z\s]+$/, message: 'Invalid name' },
  validate: {
    trim: (value) => {
      const trimmedValue = value.trim();
      return trimmedValue.length > 0 || 'Name cannot be empty or contain only spaces';
    }
  },
  onBlur: (e) => {
    e.target.value = e.target.value?.trim();
  }
};
