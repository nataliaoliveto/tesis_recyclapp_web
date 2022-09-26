import React from "react";
import {
  Stack,
  Box,
  Text,
  UnorderedList,
  ListItem,
  Image,
} from "@chakra-ui/react";
import {
  Section,
  AdvertisingPlanCard,
  DonationCard,
  StoreSubscriptionCard,
} from "../components";

type Props = {};

export const Services = (props: Props) => {
  return (
    <>
      <Section id="id-services" backgroundColor="gray.75">
        <Stack
          direction={{ base: "column", lg: "row" }}
          justifyContent="center"
          spacing={16}
          alignItems="center"
          color="gray.600"
        >
          <Image
            src="/assets/mobilePhone.png"
            width="252px"
            height="534px"
            alt="estructura de un celular"
          />
          <Stack direction="column" justifyContent="center" alignItems="center">
            <Text as="h2" fontSize="42px" fontWeight={"600"} textAlign="center">
              Nuestros servicios
            </Text>
            <Box width={"400px"} h="10px" bgColor="green.100" />
          </Stack>
        </Stack>
      </Section>
      <Section backgroundColor="gray.75">
        <Stack
          direction={{ base: "column", lg: "row" }}
          justifyContent="center"
          spacing={8}
          alignItems={{ base: "center", lg: "flex-start" }}
          color="gray.600"
        >
          <Stack direction="row" alignItems="center" bgColor="cyan.400">
            <Stack direction="column" px={4} maxW="600px" bgColor="red.100">
              <Stack
                direction="row"
                alignItems="center"
                bgColor="green.200"
                justifyContent="center"
              >
                <Image
                  src="/assets/mobilePhone.png"
                  width="252px"
                  height="534px"
                  alt="estructura de un celular"
                />
                <Box
                  display="flex"
                  bgColor="yellow.200"
                  px={4}
                  py={2}
                  borderRadius="full"
                >
                  <Text as="h2" fontSize="32px" fontWeight={600}>
                    Wiki y noticias
                  </Text>
                </Box>
              </Stack>
              <Stack h="full" spacing={8}>
                <Box display="flex" flexDirection="column" m={5}>
                  <Text fontSize="24px">
                    <b>Wiki</b> donde podrás aprender:
                  </Text>
                  <Box width={"350px"} h="4px" bgColor="yellow.200" my={5} />
                  <UnorderedList>
                    <ListItem fontSize="20px">
                      Los diferentes tipos de materiales que son reciclables y
                      los que no deben ser tirados como basura orgánica
                    </ListItem>
                    <ListItem fontSize="20px">
                      Cómo emplear las técnicas de reciclaje o reutilización
                    </ListItem>
                    <ListItem fontSize="20px">
                      Cómo hacer compost en casa
                    </ListItem>
                  </UnorderedList>
                  <Box width={"350px"} h="4px" bgColor="yellow.200" my={5} />
                  <Text fontSize="20px" textAlign="center">
                    <b>Noticias</b> de impacto general en el medioambiente y
                    contenido multimedia externo en plataformas de Streaming
                  </Text>
                </Box>
              </Stack>
            </Stack>
          </Stack>

          <Stack direction="row" alignItems="center" bgColor="cyan.400">
            <Stack direction="column" px={4} maxW="600px" bgColor="red.100">
              <Stack
                direction="row"
                alignItems="center"
                bgColor="green.200"
                justifyContent="center"
              >
                <Image
                  src="/assets/mobilePhone.png"
                  width="252px"
                  height="534px"
                  alt="estructura de un celular"
                />
                <Box
                  display="flex"
                  bgColor="cyan.200"
                  px={4}
                  py={2}
                  borderRadius="full"
                >
                  <Text
                    as="h2"
                    fontSize={{ base: "26px", lg: "32px" }}
                    fontWeight={600}
                  >
                    Publicidad
                  </Text>
                </Box>
              </Stack>
              <Stack
                direction="column"
                justifyContent="center"
                h="full"
                spacing={8}
              >
                <Box
                  display="flex"
                  flexDirection="column"
                  maxW="400px"
                  justifyContent="center"
                  alignItems="center"
                  m={5}
                >
                  <Text fontSize="20px" textAlign="center">
                    ¿Tu negocio sigue políticas verdes? Tenemos un espacio
                    exclusivo para vos. Visita nuestros planes de contratación
                    debajo
                  </Text>
                </Box>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Section>
      <Section>
        <Stack justifyContent="center" alignItems="center">
          <Stack direction="column" justifyContent="center" alignItems="center">
            <Text
              as="h2"
              fontSize="36px"
              fontWeight={"600"}
              textAlign="center"
              color="gray.700"
            >
              Planes de publicidad
            </Text>
            <Box width={"400px"} h="8px" bgColor="teal.100" />
          </Stack>
          <Stack
            spacing={6}
            direction={{ base: "column", lg: "row" }}
            textAlign="center"
            p={4}
            borderRadius="24px"
            shadow="lg"
            backgroundColor="gray.50"
          >
            <AdvertisingPlanCard
              titleBgColor="teal.100"
              title="Diaria"
              oneTimePrice="375.-"
            />
            <AdvertisingPlanCard
              titleBgColor="teal.200"
              title="Semanal"
              oneTimePrice="2.115.-"
            />
            <AdvertisingPlanCard
              titleBgColor="teal.300"
              title="Mensual"
              oneTimePrice="7.615.-"
            />
          </Stack>
        </Stack>
      </Section>
      <Section>
        <Stack w="full" alignItems="center">
          <DonationCard />
        </Stack>
      </Section>
      <Section>
        <Stack
          w="full"
          bgColor="gray.75"
          alignItems="center"
          justifyContent="center"
          color="gray.600"
        >
          <Stack
            maxW="920px"
            justifyContent="center"
            alignItems="center"
            mt={20}
          >
            <Box display="flex" w="full" justifyContent="center">
              <Box bgColor="green.200" py={2} px={8} borderRadius="full">
                <Text fontSize="32px" fontWeight={600}>
                  Mapas y listados
                </Text>
              </Box>
            </Box>
            <Stack direction={{ base: "column", lg: "row" }} spacing={8}>
              <Image
                src="/assets/mobilePhone.png"
                width="252px"
                height="534px"
                alt="estructura de un celular"
              />
              <Stack justifyContent="center" maxW="360px">
                <Box display="flex" flexDirection="column">
                  <Text maxW="260px" fontSize="20px" fontWeight={300}>
                    Podrás ver la ubicación de
                  </Text>
                  <Box width={"300px"} h="4px" bgColor="green.100" />
                  <UnorderedList fontSize="20px" fontWeight={300}>
                    <ListItem>Puntos Verdes</ListItem>
                    <ListItem>Composteras Comunitarias</ListItem>
                    <ListItem>Tiendas adheridas</ListItem>
                  </UnorderedList>
                  <Text maxW="240px" fontSize="20px" fontWeight={300} mt={5}>
                    <b>En dos formatos:</b> a través del mapa o en forma de
                    lista
                  </Text>
                </Box>
                <Box
                  display="flex"
                  justifyContent="flex-end"
                  fontSize="20px"
                  fontWeight={300}
                >
                  <Text textAlign="right" maxW="240px" mt={5}>
                    Podrás <b>usar filtros</b> para ajustar la búsqueda a tus
                    necesidades
                  </Text>
                </Box>
                <Box width={"300px"} h="4px" bgColor="green.100" />
              </Stack>
              <Image
                src="/assets/mobilePhone.png"
                width="252px"
                height="534px"
                alt="estructura de un celular"
              />
            </Stack>
          </Stack>
        </Stack>

        <Stack
          mt={20}
          pt={8}
          w="full"
          bgColor="gray.75"
          alignItems="center"
          justifyContent="center"
          direction={{ base: "column", lg: "row" }}
          color="gray.600"
        >
          <Stack direction="column" justifyContent="center" h="full">
            <Box display="flex" w="full" justifyContent="center">
              <Box bgColor="yellow.200" py={2} px={8} borderRadius="full">
                <Text fontSize="32px" fontWeight={600}>
                  Publicaciones
                </Text>
              </Box>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              maxW="400px"
              justifyContent="center"
              alignItems="center"
            >
              <Box mt={5} mb={5}></Box>
              <Image
                src="/icons/numberOne.png"
                width="32px"
                height="32px"
                alt="estructura de un celular"
                mb="5"
              />
              <Text fontSize="20px" textAlign="center">
                Podrás publicar qué materiales ofreces o buscas (o necesitas que
                trasladen a un Punto Verde)
              </Text>
              <Image
                src="/icons/numberTwo.png"
                width="32px"
                height="32px"
                alt="estructura de un celular"
                m="5"
              />
              <Text fontSize="20px" textAlign="center">
                Otro reciclador confirma que necesita o tiene esos materiales
              </Text>
              <Image
                src="/icons/numberThree.png"
                width="32px"
                height="32px"
                alt="estructura de un celular"
                m="5"
              />
              <Text fontSize="20px" textAlign="center">
                Arreglan el punto de encuentro
              </Text>
            </Box>
          </Stack>
          <Stack>
            <Image
              src="/assets/mobilePhone.png"
              width="252px"
              height="534px"
              alt="estructura de un celular"
            />
          </Stack>
          <Stack h="full" spacing={8}>
            <Box display="flex" flexDirection="column" m={5}>
              <Text fontSize="20px">En este menú podrás ver rápidamente:</Text>
              <Box width={"350px"} h="4px" bgColor="yellow.200" />
              <UnorderedList>
                <ListItem fontSize="20px">tus publicaciones activas</ListItem>
                <ListItem fontSize="20px">
                  las publicaciones aceptadas por ambas partes
                </ListItem>
                <ListItem fontSize="20px">
                  todas las publicaciones activas
                </ListItem>
              </UnorderedList>
            </Box>
          </Stack>
        </Stack>

        <Stack
          pt={8}
          w="full"
          bgColor="gray.75"
          alignItems="center"
          justifyContent="center"
          direction="column"
        >
          <Stack
            direction="column"
            mb={8}
            justifyContent="center"
            spacing={4}
            color={"gray.600"}
            mt={10}
          >
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Box width={"375px"} h="4px" bgColor="green.100" />
              <Text textAlign="center" fontSize="20px">
                Participando en la aplicación podés obtener
              </Text>
            </Stack>
            <Box display="flex" w="full" justifyContent="center">
              <Box bgColor="green.200" py={2} px={8} borderRadius="full">
                <Text fontSize="32px" fontWeight={600}>
                  Puntos y beneficios
                </Text>
              </Box>
            </Box>
            <Stack direction={{ base: "column", md: "row" }} spacing={8}>
              <Image
                src="/assets/mobilePhone.png"
                width="252px"
                height="534px"
                alt="estructura de un celular"
              />
              <Box
                display="flex"
                flexDirection="column"
                maxW="450px"
                justifyContent="center"
              >
                <Text fontSize="20px">
                  Por cada publicación en la que participes,{" "}
                  <b>sumarás puntos</b> que luego podrás{" "}
                  <b>intercambiar por beneficios</b> ofrecidos por las Tiendas
                  adheridas
                </Text>
              </Box>
            </Stack>
          </Stack>
          <Stack spacing={8} color="gray.600">
            <Box display="flex" w="full" justifyContent="center">
              <Box bgColor="green.200" py={2} px={8} borderRadius="full">
                <Text fontSize="32px" fontWeight={600}>
                  Tiendas adheridas
                </Text>
              </Box>
            </Box>
            <Stack
              direction={{ base: "column", lg: "row" }}
              maxW="600px"
              alignItems="center"
              spacing={8}
            >
              <Stack
                direction="column"
                justifyContent="center"
                spacing={6}
                textAlign="right"
              >
                <Text fontSize="20px">
                  Si te registras como Tienda en nuestra aplicación, los demás
                  recicladores podrán conocer tus servicios
                </Text>
                <Box width={"375px"} h="4px" bgColor="green.100" />
                <Text fontSize="20px">
                  Podrás adquirir materiales de las publicaciones y{" "}
                  <b>reducir el costo de esta materia prima a cero</b>
                </Text>
                <Box width={"375px"} h="4px" bgColor="green.100" />
                <Text fontSize="20px">
                  Además podrás ofrecer beneficios a aquellos que cuenten con
                  puntos acumulados
                </Text>
              </Stack>
              <Image
                src="/assets/mobilePhone.png"
                width="252px"
                height="534px"
                alt="estructura de un celular"
              />
            </Stack>
          </Stack>
        </Stack>
      </Section>
      <Section>
        <Stack justifyContent="center" alignItems="center">
          <Stack direction="column" justifyContent="center" alignItems="center">
            <Text
              as="h2"
              fontSize="36px"
              fontWeight={"600"}
              textAlign="center"
              color="gray.600"
            >
              Planes para Tiendas
            </Text>
            <Box width={"400px"} h="10px" bgColor="teal.100" />
          </Stack>
          <Stack
            spacing={6}
            direction={{ base: "column", lg: "row" }}
            textAlign="center"
            p={4}
            borderRadius="24px"
            shadow="lg"
            backgroundColor="gray.50"
          >
            <StoreSubscriptionCard
              titleBgColorSS="teal.200"
              titleSS="La tienda ofrece beneficios"
              message="con al menos dos beneficios activos ofrecidos a los usuarios"
              monthlyPrice="1.500"
            />
            <StoreSubscriptionCard
              titleBgColorSS="teal.100"
              titleSS="La tienda no ofrece beneficios"
              message=""
              monthlyPrice="2.500"
            />
          </Stack>
        </Stack>
      </Section>
    </>
  );
};
