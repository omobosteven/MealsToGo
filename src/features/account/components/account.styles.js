import styled from "@emotion/native";
import { ImageBackground, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";
import { withAttrs } from "../../../utilities/withAttrs";
import { Text } from "../../../components/typography/text.component";

export const AccountBackground = withAttrs(
	styled(ImageBackground)`
		flex: 1;
		align-items: center;
		justify-content: center;
	`,
	({ props, theme }) => ({
		source: require("../../../../assets/home_bg.jpg"),
	})
);

export const AuthInput = styled(TextInput)`
	width: 300px;
`;

export const Title = styled(Text)`
	font-size: 30px;
`;

export const ErrorContainer = styled.View`
	max-width: 300px;
	align-items: center;
	align-self: center;
	margin-top: ${(props) => props.theme.space[2]};
	margin-bottom: ${(props) => props.theme.space[2]};
`;

export const AccountContainer = styled(View)`
	background-color: rgba(255, 255, 255, 0.7);
	padding: ${(props) => props.theme.space[4]};
	margin-top: ${(props) => props.theme.space[2]};
`;

export const AccountCover = styled(View)`
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: rgba(255, 255, 255, 0.3);
`;

export const AuthButton = withAttrs(
	styled(Button)`
		padding: ${(props) => props.theme.space[2]};
	`,
	({ props, theme }) => ({
		color: colors.brand.primary,
	})
);

export const AnimationWrapper = styled(View)`
	width: 100%;
	height: 40%;
	position: absolute;
	top: 30px;
	padding: ${(props) => props.theme.space[2]};
`;
