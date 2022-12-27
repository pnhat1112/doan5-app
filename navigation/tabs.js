import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../src/screens/Home';
import NewsManager from '../src/screens/NewsManager';
import PostNews from '../src/screens/PostNews';
import NewsLike from '../src/screens/NewsLike';
import Account from '../src/screens/Account';
import Login from '../src/screens/Login';

import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
const Tab = createBottomTabNavigator();

const CustomTabBarButton = (children, onPress) => {
    return(
        <TouchableOpacity 
            style={{
                top: -30,
                ...style.shadow
            }}
            onPress={onPress}
        >
            <View style={{
                width: 80,
                height: 80,
                borderRadius: 40,
                backgroundColor: '#FBD07C',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Image
                    source={require("../assets/icon/create.png")}
                    resizeMode='contain'
                    style={{
                        width: 30,
                        height: 30,
                    }}
                />
            <Text style={{fontSize: 12}}>Đăng bài</Text>
            </View>
        </TouchableOpacity>
    )
}
const Tabs = () => {
    return (
      <Tab.Navigator
        screenOptions={{ 
            headerShown: false,
            tabBarActiveTintColor: '#000',
            tabBarInactiveTintColor: '#FFF',
            
            tabBarShowLabel: false,
            tabBarShowIcon: true,
            tabBarStyle: {
                position: 'absolute',
                bottom: 25,
                left: 20,
                right: 20,
                elevation: 0,
                backgroundColor : '#FFF',
                borderRadius: 15,   
                height: 90,
                ...style.shadow,
                paddingBottom: 5
            }
        }}>
        <Tab.Screen name="Home" component={Home} 
            options= {{ 
                tabBarIcon: ({focused}) => {
                  return (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                        <Image
                        tintColor="#000000"
                        source={require("../assets/icon/home.png")}
                        resizeMode='contain'
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? '#F9A414' : '#B2B2B2'
                        }}
                        />
                        <Text style={{color: focused ? '#F9A414' : '#B2B2B2', fontSize: 12}}>Trang chủ</Text>
                    </View>
                  )
                }
            }}
        />
        <Tab.Screen name="NewsManager" component={NewsManager} 
            options= {{
                tabBarIcon: ({focused}) => {
                  return (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                        <Image
                        tintColor="#000000"
                        source={require("../assets/icon/manager.png")}
                        resizeMode='contain'
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? '#F9A414' : '#B2B2B2'
                        }}
                        />
                        <Text style={{color: focused ? '#F9A414' : '#B2B2B2', fontSize: 12}}>Quản lý tin</Text>
                    </View>
                  )
                }
            }}
        />
        <Tab.Screen name="PostNews" component={PostNews} 
           options= {{
            tabBarButton: (props) => {
                return(
                    // <CustomTabBarButton { ...props }/>
                    <CustomTabBarButton/>
                )
            },
        }}
        />
        <Tab.Screen name="NewsLike" component={NewsLike} 
            options= {{
                tabBarIcon: ({focused}) => {
                return (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                        <Image
                        tintColor="#000000"
                        source={require("../assets/icon/newslike.png")}
                        resizeMode='contain'
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? '#F9A414' : '#B2B2B2'
                        }}
                        />
                        <Text style={{color: focused ? '#F9A414' : '#B2B2B2', fontSize: 12}}>Tin yêu thích</Text>
                    </View>
                )
                }
            }}
        />
        <Tab.Screen name="Account" component={Login} 
            options= {{
                tabBarIcon: ({focused}) => {
                return (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                        <Image
                        tintColor="#000000"
                        source={require("../assets/icon/user.png")}
                        resizeMode='contain'
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? '#F9A414' : '#B2B2B2'
                        }}
                        />
                        <Text style={{color: focused ? '#F9A414' : '#B2B2B2', fontSize: 12}}>Tài khoản</Text>
                    </View>
                )
                }
            }}
        />
    </Tab.Navigator> 
    );
  }

const style = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
          width: 0, 
          height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    }
});

export default Tabs;