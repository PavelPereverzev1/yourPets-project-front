import {
  SkeletonButton,
  SkeletonImageBlock,
  SkeletonItem,
  SkeletonList,
} from './SkeletonNotices.styled';

const SkeletonNotices = () => {
  return (
    <SkeletonList>
      {Array.from({ length: 12 }, (_, i) => (
        <SkeletonItem key={i}>
          <SkeletonImageBlock />
          <SkeletonButton />
        </SkeletonItem>
      ))}
    </SkeletonList>
  );
};

export default SkeletonNotices;
