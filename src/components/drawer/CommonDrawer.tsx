import React from 'react';

import { Drawer, DrawerBody, DrawerOverlay, DrawerContent, DrawerCloseButton } from 'components/chakra-parts/Overlay';
import { Sidebar } from 'components/sidebar';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const CommonDrawer = ({ isOpen, onClose }: Props) => {
  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement="right">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerBody>
          <Sidebar />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
