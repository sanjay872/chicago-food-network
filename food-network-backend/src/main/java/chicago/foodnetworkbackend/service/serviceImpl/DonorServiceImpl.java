package chicago.foodnetworkbackend.service.serviceImpl;

import chicago.foodnetworkbackend.dto.DonorDto;
import chicago.foodnetworkbackend.entity.Donor;
import chicago.foodnetworkbackend.repository.DonorRepository;
import chicago.foodnetworkbackend.service.DonorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class DonorServiceImpl implements DonorService {

    @Autowired
    private DonorRepository repository;

    @Override
    public Long createDonor(DonorDto donor) {
        return repository.save(toDonor(donor)).getDonorId();
    }

    @Override
    public DonorDto getDonorById(long id) {
        Optional<Donor> donor=repository.findById(id);
        if(donor.isPresent())
            return toDto(repository.getReferenceById(id));
        return null;
    }

    @Override
    public void updateDonor(DonorDto donorDto) {
        Optional<Donor> donor=repository.findById(donorDto.getDonorId());
        if(donor.isPresent()){
            repository.save(toDonor(donorDto));
        }
    }

    private Donor toDonor(DonorDto donorDto){
        return Donor.builder()
                .donorId(donorDto.getDonorId())
                .email(donorDto.getEmail())
                .password(donorDto.getPassword())
                .firstName(donorDto.getFirstName())
                .lastName(donorDto.getLastName())
                .latitude(donorDto.getLatitude())
                .longitude(donorDto.getLongitude())
                .build();
    }

    private DonorDto toDto(Donor donor){
        return DonorDto.builder()
                .donorId(donor.getDonorId())
                .email(donor.getEmail())
                .password(donor.getPassword())
                .firstName(donor.getFirstName())
                .lastName(donor.getLastName())
                .latitude(donor.getLatitude())
                .longitude(donor.getLongitude())
                .build();
    }
}
