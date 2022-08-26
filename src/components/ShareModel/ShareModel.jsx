
import { Modal, useMantineTheme } from '@mantine/core';
import PostShare from '../PostShare/PostShare';

export const ShareModel = ({ modelOpend, setModelOpend }) => {
    const theme = useMantineTheme();

    return (
        <Modal
            overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
            overlayOpacity={0.55}
            overlayBlur={3}
            size="55%"
            opened={modelOpend}
            onClose={() => setModelOpend(false)}
        >
           <PostShare/>
        </Modal>
    );
}

