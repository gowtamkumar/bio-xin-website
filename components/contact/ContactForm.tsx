// "use client";
// import { Button, Form, Input, Space } from "antd";
// import React, { useState } from "react";

// export default function ContactForm() {
//   const [success, setSuccess] = useState("");
//   const [form] = Form.useForm();

//   async function handleSubmit(value: any) {
//     console.log("🚀 ~ value:", value);

//     // setSuccess("Newsletter Successfully");
//     // setTimeout(() => {
//     //   setSuccess("");
//     //   form.resetFields();
//     // }, 2000);
//   }

//   return (
//     <>
//       <Form
//         layout="vertical"
//         form={form}
//         onFinish={handleSubmit}
//         autoComplete="off"
//         scrollToFirstError={true}
//       >
//         {success}
//         <Form.Item
//           name="name"
//           rules={[
//             {
//               required: true,
//               message: "Name is Required",
//             },
//           ]}
//         >
//           <Input placeholder="Enter Name" />
//         </Form.Item>
//         <Form.Item
//           name="email"
//           // rules={[
//           //   {
//           //     required: true,
//           //     message: " E-mail is Required",
//           //   },
//           // ]}
//         >
//           <Input placeholder="Enter E-mail" />
//         </Form.Item>

//         <Form.Item
//           name="phone"
//           // label="Phone No"
//           rules={[
//             {
//               required: true,
//               message: "Phone No is Required",
//             },
//           ]}
//         >
//           <Input placeholder="Enter Phone No" />
//         </Form.Item>

//         <Form.Item
//           name="subject"
//           rules={[
//             {
//               required: true,
//               message: "Subject is Required",
//             },
//           ]}
//         >
//           <Input placeholder="Enter Subject" />
//         </Form.Item>

//         <Form.Item
//           name="message"
//           rules={[
//             {
//               required: true,
//               message: "message is Required",
//             },
//           ]}
//         >
//           <Input.TextArea rows={6} placeholder="Enter" />
//         </Form.Item>

//         <Button type="primary" htmlType="submit" className="me-2">
//           Send
//         </Button>
//         <Button type="primary" htmlType="reset">
//           Clear
//         </Button>
//       </Form>
//     </>
//   );
// }
