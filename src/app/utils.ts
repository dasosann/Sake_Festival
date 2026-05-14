export const getBoothColorClass = (prefix: string) => {
  const colors: Record<string, string> = {
    'A': 'bg-[#ffebee] border-[#ffcdd2] text-[#c62828]',
    'B': 'bg-[#e3f2fd] border-[#bbdefb] text-[#1565c0]',
    'D': 'bg-[#efebe9] border-[#d7ccc8] text-[#4e342e]',
    'E': 'bg-[#f3e5f5] border-[#e1bee7] text-[#7b1fa2]',
    'F': 'bg-[#e8f5e9] border-[#c8e6c9] text-[#2e7d32]',
    'G': 'bg-[#fffde7] border-[#fff9c4] text-[#f9a825]',
    'H': 'bg-[#e0f2f1] border-[#b2dfdb] text-[#00695c]',
    'J': 'bg-[#f1f8e9] border-[#dcedc8] text-[#33691e]',
    'K': 'bg-[#f9fbe7] border-[#e6ee9c] text-[#827717]',
    'L': 'bg-[#fff3e0] border-[#ffe0b2] text-[#e65100]',
    'M': 'bg-[#ede7f6] border-[#d1c4e9] text-[#512da8]',
    'P': 'bg-[#fce4ec] border-[#f8bbd0] text-[#c2185b]',
    'Q': 'bg-[#fff0f3] border-[#ffccd5] text-[#c9184a]',
    'R': 'bg-[#e8eaf6] border-[#c5cae9] text-[#283593]',
    'V': 'bg-[#e0f7fa] border-[#b2ebf2] text-[#00838f]',
    'U': 'bg-[#eceff1] border-[#cfd8dc] text-[#455a64]',
  };
  return colors[prefix] || 'bg-bg-sub border-[#ddd] text-[#888]';
};
