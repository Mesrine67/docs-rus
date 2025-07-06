import React from 'react';
import { TerminalIcon, FileTextIcon } from '@radix-ui/react-icons';
import { Theme, Box, Flex, Text } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';

export function FileViewer({
  filename,
  language = 'bash',
  isTerminal = false,
  children,
}) {
  const icon = isTerminal ? <TerminalIcon /> : <FileTextIcon />;
  
  return (
    <Theme appearance="inherit">
      <Box
        style={{
          border: '1px solid var(--ifm-color-emphasis-300)',
          borderRadius: 'var(--ifm-global-radius)',
          marginBottom: 'var(--ifm-leading)',
          overflow: 'hidden',
        }}
      >
        <Flex
          align="center"
          gap="2"
          p="2"
          style={{
            borderBottom: '1px solid var(--ifm-color-emphasis-300)',
            backgroundColor: 'var(--ifm-color-emphasis-100)',
          }}
        >
          {icon}
          <Text size="2" weight="medium">{filename}</Text>
        </Flex>
        <Box
          style={{
            padding: 'var(--ifm-pre-padding)',
            margin: 0,
            overflow: 'auto',
          }}
        >
          <pre
            className={`prism-code language-${language}`}
            style={{ margin: 0 }}
          >
            <code className={`language-${language}`}>{children}</code>
          </pre>
        </Box>
      </Box>
    </Theme>
  );
}
