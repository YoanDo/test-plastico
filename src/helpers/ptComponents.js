import getSanityImageUrl from './getSanityImageUrl';

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <img
          alt={value.alt || ' '}
          loading="lazy"
          src={getSanityImageUrl(value).width(1200).fit('max').auto('format')}
        />
      );
    }
  }
};

export default ptComponents;
