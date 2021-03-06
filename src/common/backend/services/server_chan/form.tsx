import { Form, Input, Icon } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import React, { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';

interface FormProps extends FormComponentProps {
  verified?: boolean;
  info?: {
    accessToken: string;
  };
}

const ConfigForm: React.FC<FormProps> = ({ form: { getFieldDecorator }, info, verified }) => {
  const disabled = verified || !!info;
  let initAccessToken;
  if (info) {
    initAccessToken = info.accessToken;
  }
  return (
    <Fragment>
      <Form.Item label="AccessToken">
        {getFieldDecorator('accessToken', {
          initialValue: initAccessToken,
          rules: [
            {
              required: true,
              message: (
                <FormattedMessage
                  id="backend.services.server_chan.accessToken.message"
                  defaultMessage="AccessToken is required"
                />
              ),
            },
          ],
        })(
          <Input
            disabled={disabled}
            suffix={
              <a href={'https://sc.ftqq.com/'} target={'https://sc.ftqq.com/'}>
                <Icon type="key" />
              </a>
            }
          />
        )}
      </Form.Item>
    </Fragment>
  );
};

export default ConfigForm;
