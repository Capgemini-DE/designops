import { React, useState } from 'react';
import { Button, Typography, TextField, Box } from '@material-ui/core';
import CustomModal from '../lib/CustomModal';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'DesignOps/CustomModal',
  component: CustomModal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => {
  const [openModal, setOpenModal] = useState(true);
  const openModalHandler = () => setOpenModal(true);
  const handleSuccess = () => setOpenModal(false);
  const handleClose = () => setOpenModal(false);

  return (
    <Box style={{ display: 'flex', justifyContent: 'center' }}>
      <Button variant="outlined" color="primary" onClick={openModalHandler}>
        Open Modal
      </Button>
      <CustomModal
        {...args}
        isOpen={openModal}
        handleSuccess={handleSuccess}
        handleClose={handleClose}
        children={isForm(args.size, args)}
      />
    </Box>
  );
};

const isForm = (size, args) => {
  switch (size) {
    case 'md':
      return (
        <div>
          {args.children}
          <p></p>
          <form>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              type="email"
              fullWidth
            />
          </form>
        </div>
      );
    case 'lg':
      return <Typography>{args.children}</Typography>;
    default:
      return args.children;
  }
};

export const ExtraSmallModal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ExtraSmallModal.args = {
  size: 'xs',
  title: 'Are you sure you want to exit????',
  children: '',
};

export const SmallModal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SmallModal.args = {
  size: 'sm',
  title: 'Success!!',
  children: 'User has been created successfully!!!!!!!!!!',
};

export const MediumModal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
MediumModal.args = {
  size: 'md',
  title: 'Subscribe below!!!!',
  children:
    'To subscribe to this website, please enter your email address here. We will send updates occasionally.',
};

export const LargeModal = Template.bind({});
LargeModal.args = {
  size: 'lg',
  title: 'Success!!',
  children:
    'Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.',
};
