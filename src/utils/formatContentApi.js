import { format } from "prettier";

const formatLinkData = ({ items }) => {
  const formatedData = items[0]?.fields.categories.map((arr) => ({
    category: arr.fields.category,
    subCategory: arr.fields.subCategories.map((arr) => ({
      subCategory: arr.fields.subCategory,
      products: arr.fields.products.map((arr) => ({
        product: arr.fields.name,
        productLink: arr.fields.slug,
      })),
    })),
  }));
  console.log("=============>", formatedData);
  return formatedData;
};

const formatCarouselData = ({ items }) => {
  const formatedData = items[0]?.fields.mainBanner.fields.image.map((item) => ({
    item: item.fields.redirectUrl,
    imgAlt: item.fields.alt,
    imageUrl: item.fields.image.fields.file.url,
  }));
  return formatedData;
};

const formatMediumBannerData = ({ items }) => {
  const formatedData = {
    heading: items[0]?.fields.mediumBanner[0].fields.title,
    images: items[0]?.fields.mediumBanner[0].fields.image.map((img) => ({
      alt: img.fields.alt,
      redirectUrl: img.fields.redirectUrl,
      img: img.fields.image.fields.file.url,
    })),
  };
  console.log(formatedData);
  return formatedData;
};

const formatSmallBannerData = ({ items }) => {
  const formatedData = items[0]?.fields.smallBanner.map((item) => ({
    name: item.fields.title,
    alt: item.fields.alt,
    redirectUrl: item.fields.redirectUrl,
    image: item.fields.image.fields.file.url,
  }));
  return formatedData;
};

const formatCategoryData = ({ items }) => {
  let formatedData = items?.filter((item) => item.fields.showInCategoryMenu === true);
  formatedData = formatedData.map((data) => data.fields);
  formatedData = formatedData.map((data) => ({
    ...data,
    image: data.image.fields.file.url,
  }));
  return formatedData;
};

const formatProductListData = ({ items }) => {
  let formatedData = items[0].fields.productCardsSection.map((item) => ({
    title: item.fields.heading,
    products: item.fields.productCards.map((product) => product.fields),
  }));
  formatedData = formatedData.map((data) => ({
    ...data,
    products: data.products.map((item) => ({
      ...item,
      image: item.image.fields.file.url,
    })),
  }));

  return formatedData;
};

const formatFooterData = ({ items }) => {
  let formatedData = { footerTop: items[0].fields.footerTop.fields };
  formatedData.footerMiddle = {
    columns: { brandingPart: items[0].fields.footerMiddle.fields.brandingPart.fields },
  };

  formatedData.footerMiddle.columns.brandingPart = {
    ...formatedData.footerMiddle.columns.brandingPart,
    logo: formatedData.footerMiddle.columns.brandingPart.logo.fields.file.url,
  };

  formatedData.footerBottom = { footerTop: items[0].fields.footerBottom.fields };
  // console.info(formatedData);
  return formatedData;
};

export {
  formatLinkData,
  formatCarouselData,
  formatMediumBannerData,
  formatSmallBannerData,
  formatCategoryData,
  formatProductListData,
  formatFooterData,
};
