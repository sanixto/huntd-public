import { useMemo } from 'react';
import { RecruiterProfile } from '@/controllers/graphql/generated';
import { getFilledValue } from '@/lib/getFilledValue';
import { FCIcon } from '@/ui/icons/typedefs';
import { IconLocation } from '@/ui/icons/general/IconLocation';
import { RecruiterProfileMetaItems } from '../recruiterProfile.typedefs';

export interface MetaItem {
  name: RecruiterProfileMetaItems,
  text: string,
  icon?: FCIcon;
}

interface UseRecruiterProfileMetaItems {
  (profile?: RecruiterProfile | null): MetaItem[]
}
interface UseRecruiterProfileMetaItems {
  (profile?: RecruiterProfile | null): MetaItem[]
}
export const useRecruiterProfileMetaItems: UseRecruiterProfileMetaItems = (
  profile,
) => useMemo(
  () => {
    if (!profile) {
      return [];
    }

    return [
      {
        name: RecruiterProfileMetaItems.Position,
        text: getFilledValue(profile.position),
      },
      {
        name: RecruiterProfileMetaItems.CompanyName,
        text: getFilledValue(profile.companyName),
      },
      {
        name: RecruiterProfileMetaItems.City,
        text: profile.city ?? '',
        icon: IconLocation,
      },
    ].filter((item) => item.text);
  },
  [profile],
);
