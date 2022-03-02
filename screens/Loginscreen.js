import { StyleSheet, Text, View } from "react-native";
import React from "react";

import axios from "axios";
import { Formik, Field } from "formik";
import * as Yup from "yup";

import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Icon,
} from "native-base";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { userStoreContext } from '../context/userContext';

const validateSchema = Yup.object().shape({
  email: Yup.string()
    .email("รูปแบบอีเมล์ไม่ถูกต้อง")
    .required("กรุณากรอกอีเมล์ใหม่"),
  password: Yup.string()
    .min(3, "รหัสผ่านต้อง 3 ตัวอักษรขึ้นไป")
    .required("กรุณาป้อนรหัสผ่านใหม่"),
});

const Loginscreen = ({ navigation }) => {
    const userStore = React.useContext(userStoreContext);

  return (
    <Container>
      <Content padder>
        <Formik
          //ค่าเริ่มต้นของข้อมูลโดยกำหนดให้ตรงกัน backend
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={validateSchema}
          onSubmit={async (values, { setSubmitting }) => {
            // same shape as initial values
            try {
              const url = "https://api.codingthailand.com/api/login";
              const res = await axios.post(url, {
                email: values.email,
                password: values.password,
              });

            await AsyncStorage.setItem('@token', JSON.stringify(res.data))
            const urlprofile = "https://api.codingthailand.com/api/profile"
            const resprofile = await axios.get(urlprofile, {
                headers:{
                    Authorization : 'Bearer '+res.data.access_token
                }
            })
            await AsyncStorage.setItem('@profile', JSON.stringify(resprofile.data.data.user))

            const profile = await AsyncStorage.getItem('@profile');
            userStore.updateProfile(JSON.parse(profile))
            

            alert("ล็อคอินเรียบร้อย");
            navigation.navigate("Home");
            } catch (error) {
              alert(error.response.data.message);
            //   alert("login fail")
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {/*//errors ใช้สำหรับการตรวจสอบ state (ถ้าผู้ใช้ไม่กรอกข้อมูลจะให้ error อะไรเกิดขึ้น)*/}
          {/* touched  เมื่อผู้ใช้ไปกดที่ name และเลื่อนเม้าส์ไปด้านนอกช่อง input โดยไม่กรอกข้อมูล*/}

          {({
            errors,
            touched,
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <Form>
              {/* กำหนดให้มีเส้นสีแดงถ้าผู้ใช้ไม่กรอกข้อมูลชื่อ */}
              <Item
                fixedLabel
                error={errors.email && touched.email ? true : false}
              >
                <Label>Email</Label>
                <Input
                  value={values.email}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  keyboardType={"email-address"}
                />
                {errors.email && touched.email && <Icon name="close-circle" />}
              </Item>
              {errors.email && touched.email && (
                <Item>
                  <Label style={{ color: "red" }}>{errors.email}</Label>
                </Item>
              )}
              <Item
                fixedLabel
                error={errors.password && touched.password ? true : false}
              >
                <Label>Password</Label>
                <Input
                  value={values.password}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  keyboardType="number-pad"
                  secureTextEntry={true}
                />
                {errors.password && touched.password && (
                  <Icon name="close-circle" />
                )}
              </Item>
              {errors.password && touched.password && (
                <Item>
                  <Label style={{ color: "red" }}>{errors.password}</Label>
                </Item>
              )}
              <Button
                block
                large
                style={{ marginTop: 30, backgroundColor: "#E9AB17" }}
                onPress={handleSubmit}
                disabled={isSubmitting}
              >
                <Text
                  style={{ color: "white", fontSize: 15, fontWeight: "bold" }}
                >
                  Login
                </Text>
              </Button>
            </Form>
          )}
        </Formik>
      </Content>
    </Container>
  );
};

export default Loginscreen;

const styles = StyleSheet.create({});
