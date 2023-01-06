import {
  Button,
  Container,
  createStyles,
  Group,
  Image,
  List,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { MdCheck } from "react-icons/md";
import image from "../assets/image-hero.svg";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
  },

  content: {
    maxWidth: 480,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  highlight: {
    position: "relative",
    backgroundColor: theme.fn.variant({
      variant: "light",
      color: theme.primaryColor,
    }).background,
    borderRadius: theme.radius.sm,
    padding: "0px 12px",
    lineHeight: "70px",
  },
}));

export function LandingPage() {
  const { classes } = useStyles();
  return (
    <div>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              A notes app React
              <br /> by <span className={classes.highlight}>Notesy</span>
            </Title>
            <Text color="dimmed" mt="md">
              Kamu bisa menyimpan catatanmu dengan aman, notes app modern oleh
              Notesy membantu mu menyimpan catatan dan membagikan catatan
              tersebut ke orang lain.
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl" color={"green"}>
                  <MdCheck size={12} stroke={1.5} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>Save, Share and Private</b> – kamu bisa menyimpan catatan dan
                membagikan atau secara private
              </List.Item>
              <List.Item>
                <b>Securely, Easy to use</b> – kamu dengan mudah bisa menyimpan
                dan menggunakan dengan tampilan yang lebih fresh
              </List.Item>
            </List>

            <Group mt={30}>
              <Button radius="xl" size="md" className={classes.control}>
                Get started
              </Button>
            </Group>
          </div>
          <Image src={image} className={classes.image} />
        </div>
      </Container>
    </div>
  );
}

export default LandingPage;
