import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

// Added CustomSelect to meet style conditions in Figma
export function CustomSelect({ options, name, value, onChange, placeholder }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef();

  // Close options list within component
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleOptionClick = (val) => {
    onChange({ target: { name, value: val } });
    setOpen(false);
  };

  const selectedLabel =
    options.find((opt) => opt.value === value)?.label || placeholder;

  return (
    <SelectContainer ref={containerRef}>
      <Selected onClick={() => setOpen(!open)}>
        {selectedLabel}
        <Arrow open={open} />
      </Selected>
      {open && (
        <OptionsList>
          {options.map((opt) => (
            <Option
              key={opt.value}
              selected={opt.value === value}
              onClick={() => handleOptionClick(opt.value)}
            >
              {opt.label}
            </Option>
          ))}
        </OptionsList>
      )}
    </SelectContainer>
  );
}

const SelectContainer = styled.div`
  position: relative;
  user-select: none;
  grid-area: ${(props) => props.area || 'auto'};

  @media (max-width: 530px) {
    width: 240px;
    margin: 0 auto;
  }
`;

const Selected = styled.div`
  background-color: #001f3f;
  color: #b3b3b3;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid #83bf46;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;

  &:hover {
    background-color: #334466;
    border-color: #83bf46;
  }
`;

const Arrow = styled.span`
  border: solid #b3b3b3;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 4px;
  margin-left: 8px;
  transform: ${({ open }) => (open ? 'rotate(-135deg)' : 'rotate(45deg)')};
  transition: transform 0.2s ease;
`;

const OptionsList = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: white;
  border-radius: 8px;
  border: 1px solid #d9d9d9;
  margin-top: 4px;
  overflow-y: auto;
  max-height: calc(5 * 35px);
  z-index: 999;
`;

const Option = styled.div`
  font-family: 'Inter', sans-serif;
  padding: 6px 8px;
  line-height: 1.4;
  cursor: pointer;
  background-color: #fff;
  color: ${({ selected }) => (selected ? '#000' : '#333')};
  font-weight: ${({ selected }) => (selected ? '700' : 'normal')};

  &:hover {
    background-color: #83bf4633;
  }
`;
